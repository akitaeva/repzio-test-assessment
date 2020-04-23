<template>
  <div class="page-wrapper">
    <h2>Our Contacts</h2>
    <div class="contact-info">
      <div class="quick-contacts">
        <div class="box">
          <h4>Customer Support</h4>
          <p>(855) 438-7379</p>
          <p>support@repzio.com</p>
        </div>

        <div class="box">
          <h4>Sales Assistance</h4>
          <p>(855) 438-7379</p>
          <p>concierge@imcdi.com</p>
        </div>
      </div>

      <div class="addresses">
        <div class="box">
          <h5>South Florida</h5>
          <p>790 Juno Ocean Walk Suite 402</p>
          <p>Juno Beach, FL 33408</p>
          <p>(855) 438-7379</p>
          <p>contact@repzio.com</p>
        </div>

        <div class="box">
          <h5>Central Florida</h5>
          <p>2356 West Lake Mary, Blvd. Suite 1100</p>
          <p>Lake Mary, FL 32746</p>
          <p>(855) 438-7379</p>
          <p>contact@repzio.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- TODO: Add a contact form for validation practice-->

<style scoped lang="scss">
.page-wrapper {
  padding: 2rem 3rem;
  max-width: 900px;
  width: 85vw;
  display: flex;
  flex-direction: column;
}
.contact-info {
  display: flex;
  padding: 2rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.quick-contacts {
  min-width: 15rem;
}

.addresses {
  min-width: 15rem;
}
.box {
  padding: 1rem 2rem;
}

h2 {
  font-size: 1.8rem;
  padding: 0 2rem;
}

h4 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

h5 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}
</style>
