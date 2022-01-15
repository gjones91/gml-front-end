import headerStyles from '../styles/Header.module.css'

//Styles header on the index page of the website
//takes in two properties; the title and summary to display in styled
//h2 and p blocks respectively
const Header = (props) => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                {props.title}
            </h1>
            <p className={headerStyles.description}>
                {props.summary}
            </p>
        </div>
    )
}

export default Header