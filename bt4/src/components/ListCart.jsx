import React from 'react'
import CartItem from './CartItem';

export default function ListCart() {
    const carts = [
        {
          id: 1,
          name: 'Iphone 16 pro max desert titan',
          description: '256GB, Desert titan new seal',
          image:
            'https://imgs.search.brave.com/ttMnamEXsiH_1THkLezmuwlX7smz_BEA3F1zp-SCSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZWJj/dS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvYW5o/LWdhaS14aW5oLWN1/dGUtZGUtdGh1b25n/LWhldC1jYS1udW9j/LWNoYW0tMTUud2Vi/cA',
          quantity: 5,
          price: 100,
        },
        {
          id: 2,
          name: 'Iphone 15 pro max titan',
          description: '256GB, titan new seal',
          image:
            'https://imgs.search.brave.com/ttMnamEXsiH_1THkLezmuwlX7smz_BEA3F1zp-SCSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZWJj/dS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvYW5o/LWdhaS14aW5oLWN1/dGUtZGUtdGh1b25n/LWhldC1jYS1udW9j/LWNoYW0tMTUud2Vi/cA',
          quantity: 2,
          price: 90,
        },
        {
          id: 3,
          name: 'Iphone 16 pro max desert titan',
          description: '256GB, Desert titan new seal',
          image:
            'https://imgs.search.brave.com/ttMnamEXsiH_1THkLezmuwlX7smz_BEA3F1zp-SCSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZWJj/dS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvYW5o/LWdhaS14aW5oLWN1/dGUtZGUtdGh1b25n/LWhldC1jYS1udW9j/LWNoYW0tMTUud2Vi/cA',
          quantity: 5,
          price: 100,
        },
        {
          id: 4,
          name: 'Iphone 16 pro max desert titan',
          description: '256GB, Desert titan new seal',
          image:
            'https://imgs.search.brave.com/ttMnamEXsiH_1THkLezmuwlX7smz_BEA3F1zp-SCSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZWJj/dS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvYW5o/LWdhaS14aW5oLWN1/dGUtZGUtdGh1b25n/LWhldC1jYS1udW9j/LWNoYW0tMTUud2Vi/cA',
          quantity: 5,
          price: 100,
        },
        {
          id: 5,
          name: 'Iphone 16 pro max desert titan',
          description: '256GB, Desert titan new seal',
          image:
            'https://imgs.search.brave.com/ttMnamEXsiH_1THkLezmuwlX7smz_BEA3F1zp-SCSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZWJj/dS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvYW5o/LWdhaS14aW5oLWN1/dGUtZGUtdGh1b25n/LWhldC1jYS1udW9j/LWNoYW0tMTUud2Vi/cA',
          quantity: 5,
          price: 100,
        },
      ];
    
  return (
    <>
    {carts.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </>

  )
}
