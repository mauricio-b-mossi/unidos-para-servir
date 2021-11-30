import React, { useContext } from 'react'
import Link from 'next/link'


export default function Donate() {

  
    return (
      <div className="px-3 py-1 text-sm sm:text-base lg:px-6 lg:py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white">
        <Link href=''>
          <a>
            <h3>Dona Ya</h3>
          </a>
        </Link>
      </div>
    );
}
