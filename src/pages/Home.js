export default function Home() {
  return (
      <>
          <h1>Homepage</h1>
          <ul className="productBox">
              <li>
                  <a href="/product/123" className="productLink"><img className="productImage" src={require('../assets/images/image3.jpeg')} alt="It's a good day to code"/></a>
                  <br /><a href="/product/123" className="productLink">Bracelates</a>
              </li>
              <li>
                  <a href="/product/456" className="productLink"><img className="productImage" src={require('../assets/images/image6.jpeg')} alt="Eat. Sleep. Code. Repeat."/></a>
                  <br /><a href="/product/456" className="productLink">Necklase</a>
              </li>
          </ul>
      </>
  )
}