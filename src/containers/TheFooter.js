import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://github.com/blackowlteam" target="_blank" rel="noopener noreferrer">Black Owl Team</a>
        <span className="ml-1">&copy; 2020 BlackOwlLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://github.com/blackowlteam" target="_blank" rel="noopener noreferrer">Black Owl Team</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
