import './categories.styles.scss'
const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats'
    },

    {
      id: 2,
      title: 'Jackets'
    },

    {
      id: 3,
      title: 'Sneakers'
    },

    {
      id: 4,
      title: 'Men'
    },

    {
      id: 5,
      title: 'Women'
    },

    // {
    //   id: 6,
    //   title: 'Kids'
    // },
  ]
  
  return(
    <div className='categories-container'>
        {
            categories.map(({ id, title}) => {
                return(
                    <div className='category-container' key={id}>
                        <div className='background-image'/>
                        <div className='category-container-body'>
                            <h2>{title}</h2>
                            <p>Shop Now</p>
                        </div>
                    </div>
                )
            }
            ) 
        }
    </div>
  )
}

export default App;
