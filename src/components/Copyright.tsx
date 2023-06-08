export const Copyright: React.FC = () => {
    return <div className="copyright">
        <p>© 2022 - {new Date().getFullYear()} <a href={window.location.origin}>CHANCE</a></p>
    </div>
}