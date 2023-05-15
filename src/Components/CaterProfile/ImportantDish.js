import React from 'react'
import './ImportantDish.css'

function ImportantDish() {
  return (
    <div>

<section id="our_menu" class="pt-5 pb-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="page_title text-center mb-4">
						<h1>our menu</h1>
						<div class="single_line"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<ul class="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab">Breakfast</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab">Lunch</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab">Dinner</a>
					</li>
				</ul>
        	</div>
			<div class="row">
				<div class="tab-content col-lg-12" id="myTabContent">
					<div class="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
						<div class="row">
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22923.jpg?w=1060" alt="Roast"/>
									<div class="menu_content">
										<h4>Roast <span>Rs.50</span></h4>
										<p>Perfect breakfast dish with tasty side dish Sambar. Childrens' favorite dish.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://img.freepik.com/premium-photo/poori-masala-curry-aloo-sabzi-puri_466689-77508.jpg?w=1060" alt="Poori"/>
									<div class="menu_content">
										<h4>Poori <span>Rs. 40</span></h4>
										<p>Perfect Crispy and tasty Poori with Masal. Delicious breakfast good and healthy morning food.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice<span>Rs. 60</span></h4>
										<p>Perfect morning rice variety with super aroma and spicy food to eat. Enjoy the taste</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://img.freepik.com/premium-photo/ghar-ki-roti-chapati-chappati-romali-roti-served-plate-top-view-indian-pakistani-desi-food_689047-3101.jpg?w=996" alt="burger"/>
									<div class="menu_content">
										<h4>Romali <span>Rs. 50</span></h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76159.jpg?w=1060&t=st=1669986813~exp=1669987413~hmac=caa8cd90eeb4c9b485daffc00c1506e560d018fadab6924910b4d81b6bbe7072" alt="black coffee"/>
									<div class="menu_content">
										<h4>Chapati <span>Rs. 40</span></h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773774.jpg?w=1060&t=st=1669986854~exp=1669987454~hmac=a8cd7f3387638d3e17c9b3a215bcb3f4918a208e420e801c70ae1705e73e8cce" alt="meat"/>
									<div class="menu_content">
										<h4>Noodles<span>Rs. 40</span></h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
						<div class="row">
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/Aowufa1.jpg" alt="pizza"/>
									<div class="menu_content">
										<h4>12" Pizza  <span>$35</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/DJlmZDJ.jpg" alt="salad"/>
									<div class="menu_content">
										<h4>Salad <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/knnQm7e.jpg" alt="green tea"/>
									<div class="menu_content">
										<h4>green tea <span>$15</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
						<div class="row">
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p class=" menu_btn btn btn-danger">view more</p>
			</div>
		</div>
	</section>

    </div>
  )
}

export default ImportantDish