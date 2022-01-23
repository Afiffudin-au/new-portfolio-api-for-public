# new-portfolio-api-for-public
this is the API of my latest portfolio : https://github.com/Afiffudin-au/new-portfolio

**API SPEC**
**Base URL** `http://localhost:8001`

> For Portfolio Cards

**Method GET**
 - retrieve all portfolio card data
 - `/portfolio/cards`

**Method GET**
 - detailed portfolio cards
 - `/portfolio/cards/{card_id}`

**Method POST**

 - create card data
 -

    Schema = {
      projectName: String
      description: String
      githubLink: String
      imgUrl: String
      tech: [Array]
      previewLink: String
    }
 - `/portfolio/cards`

> For Testimonials

**Method Get**

 - retrieve all testimonial data
 - `/portfolio/testimonials`
