import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {

    const bookCategories =[
        "fiction",
        "Magic",
        "Novel",
        "History",
        "Mistery",
        "Non-Fiction",
        "Science Fiction",
        "Fantsy",
        "Horror",
        "Autobiogtraphy",
        "Self-help",
        "Memoir",
        "Business",
        "Childern Books",
        "Travel",
        "Religion",
        "Art and Design",
        "Romance",
    ]

  const [selectedBookCategory, setselectedBookCategory] = useState (bookCategories[0])

   const handleChangeSelectedValue = (event) =>{
console.log(event.target.value);
    setselectedBookCategory(event.target.value);
   }

  //handle book submissin 

  const handleBookSubmit = (event) => {
 
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
const bookPdfURL = form.bookPdfURL.value

const bookObj = {
    bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
}

console.log(bookObj)

//Send data to dataBase

fetch("http://localhost:5000/upload-book",{
    method: "POST", 
    headers: {
        "Content-type" : "application/json",
    },
    body: JSON.stringify(bookObj)
}).then(res => res.json()).then(data =>{

alert("Book uploaded successfully")
form.reset();
})

  }

  return (
    <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

   <form  onSubmit={ handleBookSubmit}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
    {/* FirstRow */}
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" 
        name="bookTitle" 
        type="text" 
        placeholder="Book Name" required />
      </div>
     {/* AuthorNAme */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" 
        name="authorName" 
        type="text" 
        placeholder="AuthorName" required />
      </div>
     

     </div>


       {/* SecondRow */}
       <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" 
        name="imageURL" 
        type="text" 
        placeholder="Book image URL" required />
      </div>
     {/* Catrgory */}
      <div className='lg:w-1/2'>
         <div className="mb-2 block">
          <Label htmlFor="inputState" 
        value="Book Category" />
      </div>
     <select name="categoryName" id="inputState" className='w-full rounded'
     value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {bookCategories.map((option) => <option key={option} value={option} >{option}</option>)
        }
     </select>
     </div>
      </div>
{/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" 
          value="Book Description"
           />
        </div>
        <Textarea id="bookDescription" 
        name='bookDescription' placeholder="Write your book description....." 
        required 
        className='w-full'
        rows={5} />
      </div>

    {/* book pdf link */}

    <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPdfURL" 
          value="Book PDF URL" />
        </div>
        <TextInput 
        id="bookPdfURL"
        name='bookPdfURL' 
        type="text" 
        placeholder="book PDF url" 
        required />
      </div>

      <Button type="submit" className='mt-5'>Uplod Book</Button>

    </form>
    </div>
  )
}

export default UploadBooks;
