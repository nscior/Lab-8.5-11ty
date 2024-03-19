import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// // Create a single supabase client for interacting with your database
// const supabase = createClient('https://tcfyjzfhbqppmhkdpoue.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnlqemZoYnFwcG1oa2Rwb3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjYzMTgsImV4cCI6MjAyNjM0MjMxOH0.yANuWP0Sg8BpEZyBi9kEEjDxlfXfZgtwD4LPa0ebjQE')

const supabaseUrl = 'https://tcfyjzfhbqppmhkdpoue.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnlqemZoYnFwcG1oa2Rwb3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjYzMTgsImV4cCI6MjAyNjM0MjMxOH0.yANuWP0Sg8BpEZyBi9kEEjDxlfXfZgtwD4LPa0ebjQE'
const supabase = createClient(supabaseUrl,supabaseKey)

async function getBooks(){
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
      let bookList = document.getElementById('books');
      bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><tr>`;
  }
} getBooks();
