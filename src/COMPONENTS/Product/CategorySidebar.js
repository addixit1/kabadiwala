import React from 'react'
import img1 from '../../ASSETS/Images/p1.jpg'
import img2 from '../../ASSETS/Images/p2.jpg'
import img3 from '../../ASSETS/Images/p3.jpg'
import img4 from '../../ASSETS/Images/p4.jpg'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Category 1'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Category 2'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Category 3'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Category 4'
        },
        {
            id: 5,
            categoryimage: img1,
            categoryname: 'Category 5'
        },
        {
            id: 6,
            categoryimage: img2,
            categoryname: 'Category 6'
        },
        {
            id: 7,
            categoryimage: img3,
            categoryname: 'Category 7'
        },
        {
            id: 8,
            categoryimage: img4,
            categoryname: 'Category 8'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar