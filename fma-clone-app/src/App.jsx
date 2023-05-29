import './App.css'
import { data } from '../public/fma-data'

function App() {
  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </table>
      </section>
      <section id="character-cards"></section>
    </>
  )
}

export default App
