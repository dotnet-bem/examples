using System;

namespace Todo.Models
{
    public class TodoItem
    {
        public TodoItem()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }

        public string Text { get; set; }

        public bool Done { get; set; }
    }
}