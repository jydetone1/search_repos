import React, {useState, useEffect, useRef, useMemo} from 'react'
import { useActions } from '../hooks/useActions';
import{useSelector} from "../hooks/useTypedSelector"
// import debounce from "lodash.debounce"
import style from "./Header.module.scss"


const Header: React.FC = ()=> {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [term, setTerm] = useState("")
    const {searchRepos} = useActions()
    const {loading, error, data} =useSelector((state ) =>state.repos)

    useEffect(()=>{
      if(!inputRef.current){
        return;
      }
      inputRef.current.focus()
    },[])


    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     searchRepos(term)
     setTerm("")
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>  {
      setTerm(event.target.value)
    }

    // debounce logic
    //const debouncedChange = debounce(handleChange, 500)

     return (
       <>
        <div> 
          <nav className={style.header__search}>
            <h3>Github search</h3>
            <form onSubmit={submitHandler }>
                < input 
                type="text" 
                ref={inputRef} 
                value={term} 
                placeholder="search..."
                onChange={handleChange}

                //debounce after 500ms
                // onChange={debouncedChange}
                />
                <button type="submit" className={style.search__btn}>search</button>
            </form>
          </nav>
          
          <section className={style.search_github}>
            <div className={style.search__list}>
              <h2>github search app</h2> 
            </div>

            {error &&<div className={style.error}>{error}</div>}
            {loading &&<div className={style.list__loading}>Loading...</div>}
            {!error && !loading && data.map((name:any)=>{
            return (
             <div key={name.id} className={style.search__result}>
               <p><a href ={name.html_url}>{name.name}</a></p>
            </div>
            )   
          })}
          </section>
        </div>
        </>
    )
}

export default Header
