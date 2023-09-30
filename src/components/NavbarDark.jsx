import React from 'react'
import useReadingProgress from '../hooks/useReadingProgress'
import { Link } from 'react-router-dom'


function NavbarDark() {
  const completion = useReadingProgress();
  const handleClick = () => {
    console.log('Link clicked');
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl font-bold">BEĨ</a>
      </div>
      <ul>
          <li><Link to="/" onClick={handleClick}>Início</Link></li>
          <li><Link to="/quem-sou-eu" onClick={handleClick}>Quem sou eu?</Link></li>
          {/* Adicione mais links conforme necessário */}
      </ul>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        
      </div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-yellow-400 h-1 w-full bottom-0"
      />
    </div>
    
  )
}

export default NavbarDark