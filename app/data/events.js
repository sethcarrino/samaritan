const events = [
  {
    id: 1,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 2,
    name: '2020 Food Bank Event',
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://www.feedoc.org/wp-content/uploads/2016/04/LDP_041610_-234.jpg',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 3,
    name: 'Science and the Christian Faith Conference',
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://images.idgesg.net/images/article/2019/05/audience_listens_to_speaker_lecture_at_a_conference_presentation_by_toxawww_gettyimages-974238866_2400x1600-100796682-large.jpg',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 4,
    name: 'Walk MS: Raleigh',
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://lh3.googleusercontent.com/proxy/4I_F2CCLrReOsWYwNofnX1gpcIB2mK4GhVdvLVbdsZEPav0RL2UllxfN8WOU4ewbqMDvy2sQHlofOAVdggZroZl6jY47eiURp74ckWLGhV0foxO9jS7QdB__9AyLyrxHevv-1yarvNQ2DC4DlSLi1iO829o0KVdI6RrA',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 5,
    name: 'Socks & Undie 5K Rundie Run/Walk & Kids Fun Run',
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://lh3.googleusercontent.com/proxy/Tul79P_08AuHw9b9PkY1zsLg04ICQd2usYnn9dn0nA6YtdnihH9jXcTgJE5JIu8PwuYDQW2lSlstJ-5mbUzs6RjBUB0aLqSk76yaoYBilnImglaJ_MZA',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 6,
    name: "Sorting Donations at The Women's Center",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F76025727%2F287223755155%2F1%2Foriginal.20191008-153959?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C994%2C497&s=5621db1565bf63eeba8d0bffb3ed9719',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 7,
    name: 'Fostering Footsteps for Bright Futures',
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://lh3.googleusercontent.com/proxy/DOAdqVXLKlltT4iyeD_u9Un8CAhDnW2jaDWDH5TFFbwZ8BH5yQtmZAM8ktjetY5eXvIKq6tRpvYd8mGX1tJbLxUPr_dX1tO6e4WaYgN_1LO0qRYAgkA-1230VQqDD-jJHU9vEWVH_P4JAA',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  },
  {
    id: 8,
    name: 'Accessibility Volunteer Training',
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://www.volunteerhub.com/wp-content/uploads/2017/12/4-Easy-to-Implement-Volunteer-Training-Tips.jpg',
    address: {
      city: 'Cary',
      state: 'NC',
      road: '1924 Capital Blvd',
      zip: '555555'
    }
  }
];

export default events;
