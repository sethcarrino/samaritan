const events = [
  {
    id: 1,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 2,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 3,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 4,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 5,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 6,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 7,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  },
  {
    id: 8,
    name: "Carroll's Soup Kitchen",
    description:
      "Lorem ipsum dolor amet squid tattooed pork belly taxidermy you probably haven't heard of them raclette succulents. Slow-carb lumbersexual PBR&B, truffaut food truck migas aesthetic literally tumeric raw denim squid enamel pin lo-fi cold-pressed. Tattooed put a bird on it tumeric mumblecore chillwave pok pok dreamcatcher la croix, stumptown fixie air plant post-ironic. Asymmetrical synth craft beer, pinterest flexitarian keffiyeh blog adaptogen schlitz hoodie flannel banh mi gluten-free. Selfies unicorn post-ironic brooklyn schlitz asymmetrical. Cardigan vice post-ironic selvage waistcoat trust fund messenger bag.",
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
  }
];

export default events;
