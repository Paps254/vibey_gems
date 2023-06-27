export default function Home() {
  return (
      <>
          <h1>Homepage</h1>
          <ul className="productBox">
              <li>
                  <a href="/product/143" className="productLink"><img className="productImage" src={require('../assets/images/image3.jpeg')} alt="It's a good day to code"/></a>
                  <br /><a href="/product/143" className="productLink">It's a good day to code</a>
              </li>
              <li>
                  <a href="/product/486" className="productLink"><img className="productImage" src={require('../assets/images/image6.jpeg')} alt="Eat. Sleep. Code. Repeat."/></a>
                  <br /><a href="/product/486" className="productLink">Eat. Sleep. Code. Repeat.</a>
              </li>
          </ul>
      </>
  )
}