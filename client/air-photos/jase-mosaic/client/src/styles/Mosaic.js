export const MainStyles = {
  /////////////////////////
  // MAIN HEADER STYLING //
  /////////////////////////
  header: {
    style: {
      padding: '0%',
      height: '10vh',
      boxSizing: 'content-box',
      backgroundColor: '#fff',
      boxShadow: 'rgba(233, 233, 233, 0.48) 0px 4px 13px 3px'
    },
    logo: {
      margin: '0 13.2% 0 10.5%',
      padding: '0',
      height: '8.5vh',
      width: '8%',
      marginTop: '.5%'
    },
    imgSRC: 'https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/Airbnb_Logo.png',
    input: {
      position: 'fixed',
      top: '2.5%',
      border: 'thin solid #e8e8e8',
      borderRadius: '90px',
      margin: 'auto 8%',
      height: '5vh',
      width: '18%',
      boxShadow: '0px 1px 4px darkgrey',
      outline: 'none'
    },
    button: {
      boxSizing: 'border-box',
      position: 'fixed',
      top: '3.45%',
      right: '42.5%',
      height: '3.6vh',
      width: '2%',
      backgroundColor: '#ff385c',
      border: 'none',
      borderRadius: '90px'
    },
    magnify: {
      fontSize: '110%'
    }
  },
  /////////////////////////
  // INFO BAR STYLING /////
  /////////////////////////
  info: {
    bar: {
      width: '80%',
      margin: '1.5% 11%',
      marginTop: '2%'
    },
    name: {
      fontSize: '26px',
      fontWeight: '1000',
    },
    icons: {
      marginTop: '1%'
    },
    rating: {
      marginLeft: '.1%',
      margin: '0% .8%',
      fontSize: '14px',
    },
    starColor: {
      color: '#ff385c'
    },
    totalRatings: {
      color: 'grey'
    },
    superHost: {
      margin: '0% .8%',
      fontSize: '14px',
    },
    medal: {
      color: 'transparent',
      textShadow: '0 0 0 #ff385c',
      marginLeft: '.4%'
    },
    super: {
      color: 'grey',
      marginRight: '.6%'
    },
    location: {
      color: 'grey',
      margin: '0% .8%',
      fontSize: '14px',
      textDecoration: 'none',
      borderBottom: 'thin solid'
    }
  },
  /////////////////////////
  // MAIN MOSAIC STYLING //
  /////////////////////////
  photos: {
    container: {
      backgroundColor: '#f3f3f300'
    },
    large: {
      borderTopLeftRadius: '3%',
      borderBottomLeftRadius: '3%',
      width: '39%',
      height: '51.8vh',
      margin: '.2% .28% 0% 11.1%',
      backgroundSize: '100% 100%',
      float: 'left'
    },
    fourFrames: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridTemplateRows: '50%',
      maxWidth: '38.9%'
    },
    frame: {
      margin: '1%',
      justifyContent: 'space-between',
      width: '97.3%',
      height: '25.5vh',
      backgroundSize: '100% 100%'
    }

  }
}