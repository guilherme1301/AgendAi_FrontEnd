import { useRouter } from 'next/router'
import { Component, useEffect, useState } from 'react'
import BasePage from '../../../../components/pageComponents/basePage'
import Cadastro1 from './cadastro1'
import Cadastro2 from './cadastro2'
import Cadastro3 from './cadastro3'
import SuccessPage from './successPage'

const Cadastro = (props)=> {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const router = useRouter();
    const { type } = props;
  const nextPage= () =>{
   if(type == 'client') 
      setCurrentPage(<SuccessPage/>)
    else {
      switch (currentPageIndex) {
        case 0:
          setCurrentPageIndex(1);
          // setCurrentPage(<Cadastro2 type={type} nextPage={nextPage} previousPage={previousPage}/>);
          break;
        case 1:
          setCurrentPageIndex(2);
          // setCurrentPage(<Cadastro3 type={type} nextPage={nextPage} previousPage={previousPage}/>);
          break;
        case 2:
          setCurrentPageIndex(-1);
          break;
        
        default:
          setCurrentPageIndex(-1);
          break;
      }
    }
  }
  const previousPage= () =>{
   if(type == 'client') 
      setCurrentPage(<SuccessPage/>)
    else {
      switch (currentPageIndex) {
        case 0:
          router.push("/");
          break;
        case 1:
          setCurrentPageIndex(0);
          break;
        case 2:
          setCurrentPageIndex(1);
          break;
        
        default:
          router.push("/");
          break;
      }
    }
  }
  const [currentPage, setCurrentPage] = useState(<Cadastro1 type={type} nextPage={nextPage} previousPage={previousPage}/>);

  useEffect(() => {
    switch (currentPageIndex) {
      case 0:
        setCurrentPage(<Cadastro1 type={type} nextPage={nextPage} previousPage={previousPage}/>);
        break;
    
      case 1:
        setCurrentPage(<Cadastro2 type={type} nextPage={nextPage} previousPage={previousPage}/>);
        break;
    
      case 2:
        setCurrentPage(<Cadastro3 type={type} nextPage={nextPage} previousPage={previousPage}/>);
        break;
    
      default:
        setCurrentPage(<SuccessPage/>)
        break;
    }
  }, [currentPageIndex])

  return (
      currentPage
  )
}

export default Cadastro
