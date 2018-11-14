const one = {
	template: `<div class="text-center">
	<h1>HIGHLIGHTS OF QUALIFICATIONS</h1>
	<p>8 years of professional experience covering a full spectrum of administrative duties,  
	Proficient in MS Office (Microsoft Word and Excel, Power Point), Outlook and different research tools.
    Strong interpersonal communication skills
    Outstanding organization skills. 
</p>
	<img src='img/gunel.jpg' alt= 'gunel'>
	
	 </div> `
}

const two = {
	template: `<div class="text-center">
	<h1>RELEVANT WORK EXPERIENCE AND ACCOMPLISHMENTS</h1>
	<img src='img/cv1.png' alt= 'cv1'>
	
	</div`
}

const three = {
	template: `<div class="text-center">
	<h1>Projects</h1>
	<p>https://github.com/Gunigu</p>
	<img src='img/portfolio.png' alt= 'portfolio'>
	</div>
	
	`
}

const four = {
	template: `<div class="text-center">
	<p>Contact Me 415 900 8562</p>
	<img src='img/contactus.png' alt= 'contactus'>
	</div>`
}

const five = {
	template: `<div class="text-center">
	<h1>Future Goals</h1>
	<p>Never Stop Learning</p>
	<img src='img/quote.png' alt= 'quote'>
	
	</div> `
}

const router = new VueRouter({


	routes: [
{

			path: '/one',
  			component: one
  },


  {

			path: '/two',
  			component: two
  },
  {

			path: '/three',
  			component: three
  },
  {

			path: '/four',
  			component: four
  },
  {

			path: '/five',
  			component: five
  }
    ]

})

 new Vue ({
	router,
	el:"#app",
    


	data: {

	},
	methods: {

	}
}).$mount('#app')

