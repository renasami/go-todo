package repository

import (
	"errors"
	"sync"
	"todo/domain"
)

type todoRepository struct {
	m sync.Map
}

// return interface
func NewSyncMapTodoRepository() domain.TodoRepository {
	return &todoRepository{}
}

func (t *todoRepository) AllGet() ([]domain.Todo, error) {
	todos := []domain.Todo
	t.m.Range(func(key interface{}, value interface{}) bool{
		todos = append(todos, value.(domain.Todo))//change value(interface) to Todo
		return true	
	}) 
	return todos, nil
}

//updata todo's status 
func (t *todoRepository) StatusUpdate(id int) error {
	r,ok := t.m.LoadAndDelete(id)
	if !ok {
		return errors.New("Fail Load Data")
	}

	newTodo := r.(domain.Todo)
	if newTodo.Completed {
		newTodo.Completed = false
	} else {
		newTodo.Completed = true
	}

	t.Store(newTodo)

	return nil
}

//save todo
func (t *todoRepository) Store(todo domain.Todo) error {
	t.m.Store(todo.ID,todo)
	return nil
}

// delete todo
func (t *todoRepository) Delete(id int) error {
	t.m.Delete(id)
	return nil
}

