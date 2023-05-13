import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import '../styles/components/scrollUp.scss'

const ScrollUp = () => {

    const [showBtnScroll, setShowBtnScroll] = useState(false)

    const handlerShowScrollUp = () => {
        if (window.pageYOffset > 500) {
            setShowBtnScroll(true)
        } else {
            setShowBtnScroll(false)
        }
    }

    const goToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

    }
    
    useEffect(() => {
        window.addEventListener('scroll', handlerShowScrollUp)
        return () => {
          window.removeEventListener('scroll', handlerShowScrollUp);
        }
      }, [])

    return (
        <div className={showBtnScroll ? "scrollUp show" : "scrollUp hidden"} onClick={goToTop}>
            <Icon className='scrollUp-icon' icon='material-symbols:arrow-circle-up-outline'/>
        </div>
    );
}

export default ScrollUp;