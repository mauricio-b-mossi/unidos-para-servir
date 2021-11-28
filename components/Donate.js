import React from 'react'
import Link from 'next/link'

export default function Donate() {
    return (
      <div className="px-3 py-1 text-sm sm:text-base lg:px-6 lg:py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white">
        <Link href="https://www.gofundme.com/f/we-need-help-for-san-luis-talpa-communities?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">
          <a>
            <h3>Donate now</h3>
          </a>
        </Link>
      </div>
    );
}
