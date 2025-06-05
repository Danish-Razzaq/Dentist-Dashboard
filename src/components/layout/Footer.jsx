import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li>
                        <a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a>
                    </li>
                </ul>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
