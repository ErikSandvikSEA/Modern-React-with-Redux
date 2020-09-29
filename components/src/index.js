import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './components/CommentDetail'
import faker from 'faker'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard >
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Awesome!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    content="COOL!!!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="meh.. could be better"
                />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))