import React from 'react'

const Header = () => {
  return (
    <div>
        <div class="main-nav section_margin">
				<div class="container-fluid">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-12 main_nav_cover" id="nav">
								<ul id="main-menu">
									<li class="menu-item-has-children"><a href="#">Home</a>
									</li>
									<li class="menu-item-has-children"><a href="#">Layout</a>
									</li>
									<li><a href="category-list.html">News</a></li>
									<li><a href="category-grid.html">Economy</a></li>
									<li class="menu-item-has-children"><a href="category-masonry.html">Entertainment</a>
									</li>
									<li><a href="category-list.html">Jobs</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Header