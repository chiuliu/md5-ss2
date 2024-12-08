import React from 'react'

export default function ListCategory() {
    const categorys=[
        {
            id:1,
            categoryName:"HTML"
        },
        {
            id:2,
            categoryName:"Java"
        },
        {
            id:3,
            categoryName:"Python"
        },
        {
            id:4,
            categoryName:"C#"
        }   
    ]
  return (
    <>
        <ul>
        {categorys.map((category)=>(
            <li key={category.id}>
                <div>
                    {category.categoryName}
                </div>
            </li>
        ))}
        </ul>
    </>
  )
}
