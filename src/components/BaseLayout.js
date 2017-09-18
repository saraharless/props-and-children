export default class BaseLayout extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className = "base">
      // This should house Header and Footer components and be able to house any children components.
        <Header />

        <Footer />
      </div>
    );
  }
}
