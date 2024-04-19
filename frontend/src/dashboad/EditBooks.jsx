import React from 'react'
import { useLoaderData ,useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from 'react';
const EditBooks = () => {
  const {id} = useParams();
  
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL} = useLoaderData()
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

const [selectedBookCategory, setselectedBookCategory] = useState(bookCategories[0])

const handleChangeSelectedValue = (event) =>{
console.log(event.target.value);
setselectedBookCategory(event.target.value);
}

//handle book submissin 

const handleUpdate = (event) => {

event.preventDefault();
const form = event.target;

const bookTitle = form.bookTitle.value;
const authorName = form.authorName.value;
const imageURL = form.imageURL.value;
const category = form.categoryName.value;
const bookDescription = form.bookDescription.value;
const bookPdfURL = form.bookPdfURL.value

const updateBookObj = {
bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
}

//console.log(bookObj)
//update book
fetch(`http://localhost:5000/book/${id}`,{
method:"PATCH",
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify(updateBookObj)

}

).then(res => res.json()).then(data =>{
  alert("Book is updated successfully!!")
  
})


}

return (
<div className='px-4 my-12'>
<h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

<form  onSubmit={handleUpdate}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
{/* FirstRow */}
 <div className='flex gap-8'>
 <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="bookTitle" value="Book Title" />
    </div>
    <TextInput id="bookTitle" 
    name="bookTitle" 
    type="text" 
    placeholder="Book Name" 
    defaultValue={bookTitle}
    required />
  </div>
 {/* AuthorNAme */}
  <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="authorName" value="Author Name" />
    </div>
    <TextInput id="authorName" 
    name="authorName" 
    type="text" 
    placeholder="AuthorName" 
    defaultValue={authorName}
    required />
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
    placeholder="Book image URL" 
    defaultValue={imageURL}
    required />
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
    rows={5} 
    defaultValue={bookDescription}
    />
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
    required 
    defaultValue={bookPdfURL}
    />
  </div>

  <Button type="submit" className='mt-5'>Update Book</Button>

</form>
</div>
)
}

export default EditBooks
