import { Helmet } from "react-helmet"
import Navbar from "../../components/navbar/Navbar"
import './codes.css'
import ContentCard from "../../components/content_card/ContentCard"
import codesData from "../../data/code.json"
import { Turn } from "hamburger-react"

const Codes = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | Codes`}</title>
            </Helmet>
            <Navbar codes={true} />
            <main className="codeWrapper">
                <div>Not Available Yet!</div>
            </main>
        </>
    )
}

export default Codes