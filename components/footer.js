import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Container>
          <Logo />
          [ソーシャル]
        </Container>
      </div>
    </footer>
  )
}
export default Footer
