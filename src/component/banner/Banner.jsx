import React from 'react'
import one from '../../assets/images/thumb-square-1.png'
// "assets/images/thumb-square-1.png"


const Banner = () => {
  return (
    <div>
        <div id="wrapper">
		<div id="sidebar-wrapper">
			<div class="sidebar-inner">
				<div class="off-canvas-close"><span>CLOSE</span></div>
				<div class="sidebar-widget">
					<div class="widget-title-cover">
						<h4 class="widget-title"><span>Popular Articles</span></h4>
					</div>
					<ul class="menu" id="sidebar-menu">
						<li class="menu-item"><a href="#">Trending</a></li>
						<li class="menu-item menu-item-has-children"><a href="#">Thinking</a>
							<ul class="sub-menu">
								<li class="menu-item"><a href="#">Home &amp; Living</a></li>
								<li class="menu-item menu-item-has-children"><a href="#">Lifestyle</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="#">Travel</a></li>
										<li class="menu-item"><a href="#">Gardening</a></li>
										<li class="menu-item"><a href="#">Inspirations</a></li>
									</ul>
								</li>
								<li class="menu-item"><a href="#">Inspirations</a></li>
								<li class="menu-item"><a href="#">Gardening</a></li>
							</ul>
						</li>
						<li class="menu-item menu-item-has-children"><a href="#">Inspirations</a>
							<ul class="sub-menu">
								<li class="menu-item"><a href="#">House &amp; Living</a></li>
								<li class="menu-item"><a href="#">Travel</a></li>
							</ul>
						</li>
						<li class="menu-item"><a href="#">Contact</a></li>
					</ul>
				</div>

				<div class="sidebar-widget">
					<div class="widget-title-cover"><h4 class="widget-title"><span>Trending</span></h4></div>
					<div class="latest_style_2">
						<div class="latest_style_2_item_first">
							<figure class="alith_post_thumb_big">
								<span class="post_meta_categories_label">Legal, Blog</span>
								<a href="single.html"><img src="assets/images/thumb-large.jpeg" alt=""/></a>
							</figure>
							<h3 class="alith_post_title">
								<a href="single.html"><strong>Nor again is there anyone who loves or pursues or desires to obtain</strong></a>
							</h3>
						</div>
						<div class="latest_style_2_item">
							<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-1.png" alt=""/></a></figure>
							<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>

							<div class="post_meta">
								<p class="meta"><span>2 Sep, 2023</span> <span>268 views</span></p>
							</div>
						</div>
						<div class="latest_style_2_item">
							<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-2.png" alt=""/></a></figure>
							<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
							<div class="post_meta">
								<span class="meta_date">18 Sep, 2023</span>
							</div>
						</div>
						<div class="latest_style_2_item">
							<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-3.png" alt=""/></a></figure>
							<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
							<div class="post_meta">
								<span class="meta_date">18 Sep, 2023</span>
							</div>
						</div>
					</div>
				</div> 

				<div class="sidebar-widget">
					<div class="widget-title-cover"><h4 class="widget-title"><span>Advertise</span></h4></div>
					<div class="banner-adv">
						<div class="adv-thumb">
							<a href="#">
								<img class="aligncenter" alt="img1" src="assets/images/ads.jpg"/>
							</a>
						</div>
					</div>
				</div> 
			</div>
        </div>		

		<div id="page-content-wrapper">
			<div class="container-fluid">
				<div class="container">
					<div class="top_bar margin-15">
						<div class="row">
							<div class="col-md-6 col-sm-12 time">
								<div class="off-canvas-toggle" id="off-canvas-toggle"><span></span><p class="sidebar-open">MORE</p></div>
								<i class="fa fa-clock-o"></i><span>&nbsp;&nbsp;&nbsp;Friday, 5 January 2023</span>
							</div>
							<div class="col-md-6 col-sm-12 social">
								<ul>
									<li><a href=""><i class="fa fa-facebook"></i></a></li>
									<li><a href=""><i class="fa fa-twitter"></i></a></li>
									<li><a href=""><i class="fa fa-google-plus"></i></a></li>
								</ul>
								<div class="top-search">
									<i class="fa fa-search"></i><span>SEARCH</span>
								</div>
								<div class="top-search-form">
									<form action="#" class="search-form" method="get" role="search">
										<label>
											<span class="screen-reader-text">Search for:</span>
											<input type="search" name="s" value="" placeholder="Search …" class="search-field"/>
										</label>
										<input type="submit" value="Search" class="search-submit"/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-12 header">
							<h1 class="logo"><a href="index.html">HELLO WORLD</a></h1>
							<p class="tagline">NEWSPAPER / MAGAZINE / PUBLISHER</p>
						</div>
					</div>
				</div>
			</div>
			<div class="main-nav section_margin">
				<div class="container-fluid">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-12 main_nav_cover" id="nav">
								<ul id="main-menu">
									<li class="menu-item-has-children"><a href="#">Home</a>
										<ul class="sub-menu">
											<li><a href="index.html">Default</a></li>
											<li><a href="home-grid.html">Grid</a></li>
											<li><a href="home-slide.html">Big slide</a></li>
											<li><a href="home-carausel.html">Carausel</a></li>
											<li><a href="home-boxed.html">Boxed layout</a></li>
											<li><a href="home-rtl.html">RTL layout</a></li>
										</ul>
									</li>
									<li class="menu-item-has-children"><a href="#">Layout</a>
										<ul class="sub-menu">
											<li class="menu-item-has-children"><a href="#">Category</a>
												<ul class="sub-menu">
													<li><a href="category-list.html">List</a></li>
													<li><a href="category-grid.html">Grid</a></li>
													<li><a href="category-masonry.html">Masonry</a></li>
													<li><a href="category-big.html">Big </a></li>
												</ul>
											</li>
											<li class="menu-item-has-children"><a href="#">Posts</a>
												<ul class="sub-menu">
													<li><a href="single.html">Default</a></li>
													<li><a href="post-video.html">Video</a></li>
													<li><a href="post-audio.html">Audio</a></li>
													<li><a href="post-gallery.html">Gallery</a></li>
													<li><a href="post-image.html">Image</a></li>
												</ul>
											</li>
											<li class="menu-item-has-children"><a href="#">Pages</a>
												<ul class="sub-menu">
													<li><a href="page-author.html">Author</a></li>
													<li><a href="page-search.html">Search</a></li>
													<li><a href="page-404.html">404</a></li>
													<li><a href="page-contact.html">Contact</a></li>
													<li><a href="page-typography.html">Typography</a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li><a href="category-list.html">News</a></li>
									<li><a href="category-grid.html">Economy</a></li>
									<li class="menu-item-has-children"><a href="category-masonry.html">Entertainment</a>
										<ul class="sub-menu">
											<li><a href="category-big.html">Festival</a></li>
											<li><a href="category-list.html">Music</a></li>
											<li><a href="category-grid.html">Movie</a></li>
											<li><a href="category-list.html">Cinema</a></li>
										</ul>
									</li>
									<li><a href="category-list.html">Jobs</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="container ">
					<div class="row">
						<div class="owl-carousel owl-theme js carausel_slider section_margin" id="slider-small">
							<div class="item px-2">
								<div class="alith_latest_trading_img_position_relative">
									<figure class="alith_post_thumb">
										<a href="#"><img src="http://127.0.0.1:5500/assets/images/slideshow-1.jpeg" alt=""/></a>
									</figure>
									<div class="alith_post_title_small">
										<a href="single.html"><strong>Lorem ipsum dui sollic itudin </strong></a>
										<p class="meta"><span>2 Sep, 2023333</span> <span>90 views</span></p>
									</div>
								</div>
							</div>
							<div class="item px-2">
								<div class="alith_latest_trading_img_position_relative">
									<figure class="alith_post_thumb">
										<a href="single.html"><img src="http://127.0.0.1:5500/assets/images/slideshow-1.jpeg" alt=""/></a>
									</figure>
									<div class="alith_post_title_small">
										<a href="single.html"><strong>Ut enim ad minima veniam </strong></a>
										<p class="meta"><span>28 Aug, 2023</span> <span>78 views</span></p>
									</div>
								</div>
							</div>
							<div class="item px-2">
								<div class="alith_latest_trading_img_position_relative">
									<figure class="alith_post_thumb">
										<a href="single.html"><img src="http://127.0.0.1:5500/assets/images/slideshow-1.jpeg" alt=""/></a>
									</figure>
									<div class="alith_post_title_small">
										<a href="single.html"><strong>Quis autem vel eum iure reprerit</strong></a>
										<p class="meta"><span>16 Aug, 2023</span> <span>112 views</span></p>
									</div>
								</div>
							</div>
							<div class="item px-2">
								<div class="alith_latest_trading_img_position_relative">
									<figure class="alith_post_thumb">
										<a href="single.html"><img src="http://127.0.0.1:5500/assets/images/slideshow-1.jpeg" alt=""/></a>
									</figure>
									<div class="alith_post_title_small">
										<a href="single.html"><strong>At vero eos et accu samus et iusto</strong> </a>
										<p class="meta"><span>15 Jun, 2023</span> <span>328 views</span></p>
									</div>
								</div>
							</div>
							<div class="item px-2">
								<div class="alith_latest_trading_img_position_relative">
									<figure class="alith_post_thumb">
										<a href="single.html"><img src="http://127.0.0.1:5500/assets/images/slideshow-1.jpeg" alt=""/></a>
									</figure>
									<div class="alith_post_title_small">
										<a href="single.html"><strong>Is very con and rther normal for ing</strong></a>
										<p class="meta"><span>21 Sep, 2023</span> <span>178 views</span></p>
									</div>
								</div>
							</div>
							<div class="item px-2">
								<div class="alith_latest_trading_img_position_relative">
									<figure class="alith_post_thumb">
										<a href="single.html"><img src="http://127.0.0.1:5500/assets/images/slideshow-1.jpeg" alt=""/></a>
									</figure>
									<div class="alith_post_title_small">
										<a href="single.html"><strong>When it comes to selecting a </strong></a>
										<p class="meta"><span>22 Aug, 2023</span> <span>268 views</span></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="container">
					<div class="primary margin-15">
					<div class="row">
						<div class="col-md-8">
							<div class="owl-carousel owl-theme js section_margin line_hoz " id="slideshow_face">
								<div class="item">
									<figure class="alith_post_thumb_big">
										<span class="post_meta_categories_label">Legal, Blog</span>
										<a href="single.html"><img src="https://pixabay.com/photos/forest-trees-sun-rays-sunlight-fog-1072828/" alt=""/></a>
									</figure>
									<h3 class="alith_post_title " data-animate-effect="fadeInUp">
										<a href="single.html">Lorem ipsum dui sollic itudin praesent ut mollis primis eros torquent fames</a>
									</h3>
									<div class="alith_post_content_big">
										<div class="row">
											<div class="col-md-4 col-sm-12">
												<div class="post_meta_center ">
													<p><a href="page-author.html"><img src="https://pixabay.com/photos/forest-trees-sun-rays-sunlight-fog-1072828/" alt="author details"/></a></p>
													<p><a href="page-author.html" class="author"><strong>Steven Job</strong></a></p>
													<span class="post_meta_date">19 Sep, 2023</span>
												</div>
											</div>
											<div class="col-md-8 col-sm-12 ">
												<p class="alith_post_except">Is very common and rather normal for blogging beginners to be highly perplexed when it comes to selecting a theme for their blog. There are a plethora of free as well as paid options.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<figure class="alith_post_thumb_big">
										<span class="post_meta_categories_label">Fashion, Men</span>
										<a href="#"><img src="https://pixabay.com/photos/forest-trees-sun-rays-sunlight-fog-1072828/" alt=""/></a>
									</figure>
									<h3 class="alith_post_title " data-animate-effect="fadeInUp">
										<a href="single.html">Lorem ipsum dui sollic itudin praesent ut mollis primis eros torquent fames</a>
									</h3>
									<div class="alith_post_content_big">
										<div class="row">
											<div class="col-md-4 col-sm-12">
												<div class="post_meta_center ">
													<p><a href="page-author.html"><img src="https://pixabay.com/photos/forest-trees-sun-rays-sunlight-fog-1072828/" alt="author details"/></a></p>
													<p><a href="page-author.html" class="author"><strong>Steven Job</strong></a></p>
													<span class="post_meta_date">21 Sep, 2023</span>
												</div>
											</div>
											<div class="col-md-8 col-sm-12 ">
												<p class="alith_post_except">Is very common and rather normal for blogging beginners to be highly perplexed when it comes to selecting a theme for their blog. There are a plethora of free as well as paid options.</p>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<figure class="alith_post_thumb_big">
										<span class="post_meta_categories_label">Entertainment, Style</span>
										<a href="#"><img src="assets/images/slideshow-3.jpeg" alt=""/></a>
									</figure>
									<h3 class="alith_post_title " data-animate-effect="fadeInUp">
										<a href="single.html">Lorem ipsum dui sollic itudin praesent ut mollis primis eros torquent fames</a>
									</h3>
									<div class="alith_post_content_big">
										<div class="row">
											<div class="col-md-4 col-sm-12">
												<div class="post_meta_center ">
													<p><a href="page-author.html"><img src="assets/images/author-avatar.png" alt="author details"/></a></p>
													<p><a href="page-author.html" class="author"><strong>Steven Job</strong></a></p>
													<span class="post_meta_date">23 Sep, 2023</span>
												</div>
											</div>
											<div class="col-md-8 col-sm-12 ">
												<p class="alith_post_except">Is very common and rather normal for blogging beginners to be highly perplexed when it comes to selecting a theme for their blog. There are a plethora of free as well as paid options.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="post_list post_list_style_1">
								<div class="alith_heading">
									<h2 class="alith_heading_patern_2">Recent Posts</h2>
								</div>
								<article class="row section_margin ">
									<div class="col-md-3 ">
										<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb_medium_1.png" alt=""/></a></figure>
									</div>
									<div class="col-md-9 ">
										<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
										<div class="post_meta">
											<a href="page-author.html" class="meta_author_avatar"><img src="assets/images/author-avatar.png" alt="author details"/></a>
											<span class="meta_author_name"><a href="page-author.html" class="author">Steven Job</a></span>
											<span class="meta_categories"><a href="archive.html">Politics</a>, <a href="archive.html">News</a></span>
											<span class="meta_date">18 Sep, 2023</span>
										</div>
									</div>
								</article>
								<article class="row section_margin ">
									<div class="col-md-3 ">
										<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb_medium_2.png" alt=""/></a></figure>
									</div>
									<div class="col-md-9 ">
										<h3 class="alith_post_title"><a href="single.html">Letraset sheets containing Lorem Ipsum passages, and more recently</a></h3>
										<div class="post_meta">
											<a href="page-author.html" class="meta_author_avatar"><img src="assets/images/author-avatar.png" alt="author details"/></a>
											<span class="meta_author_name"><a href="page-author.html" class="author">Steven Job</a></span>
											<span class="meta_categories"><a href="archive.html">Politics</a>, <a href="archive.html">News</a></span>
											<span class="meta_date">18 Sep, 2023</span>
										</div>
									</div>
								</article>
								<article class="row section_margin ">
									<div class="col-md-3 ">
										<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb_medium_3.png" alt=""/></a></figure>
									</div>
									<div class="col-md-9 ">
										<h3 class="alith_post_title"><a href="single.html">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</a></h3>
										<div class="post_meta">
											<a href="page-author.html" class="meta_author_avatar"><img src="assets/images/author-avatar.png" alt="author details"/></a>
											<span class="meta_author_name"><a href="page-author.html" class="author">Steven Job</a></span>
											<span class="meta_categories"><a href="archive.html">Politics</a>, <a href="archive.html">News</a></span>
											<span class="meta_date">18 Sep, 2023</span>
										</div>
									</div>
								</article>
								<article class="row section_margin ">
									<div class="col-md-3 ">
										<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb_medium_4.png" alt=""/></a></figure>
									</div>
									<div class="col-md-9 ">
										<h3 class="alith_post_title"><a href="single.html">It uses a dictionary of over 200 Latin words, combined</a></h3>
										<div class="post_meta">
											<a href="page-author.html" class="meta_author_avatar"><img src="assets/images/author-avatar.png" alt="author details"/></a>
											<span class="meta_author_name"><a href="page-author.html" class="author">Steven Job</a></span>
											<span class="meta_categories"><a href="archive.html">Politics</a>, <a href="archive.html">News</a></span>
											<span class="meta_date">18 Sep, 2023</span>
										</div>
									</div>
								</article>
								<article class="row section_margin ">
									<div class="col-md-3 ">
										<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb_medium_5.png" alt=""/></a></figure>
									</div>
									<div class="col-md-9 ">
										<h3 class="alith_post_title"><a href="single.html">Reading is not only informed by what’s going on with us at that moment</a></h3>
										<div class="post_meta">
											<a href="page-author.html" class="meta_author_avatar"><img src="assets/images/author-avatar.png" alt="author details"/></a>
											<span class="meta_author_name"><a href="page-author.html" class="author">Steven Job</a></span>
											<span class="meta_categories"><a href="archive.html">Politics</a>, <a href="archive.html">News</a></span>
											<span class="meta_date">18 Sep, 2023</span>
										</div>
									</div>
								</article>
								<article class="row section_margin ">
									<div class="col-md-3 ">
										<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb_medium_6.png" alt=""/></a></figure>
									</div>
									<div class="col-md-9 ">
										<h3 class="alith_post_title"><a href="single.html">What you see and what you’re experiencing as you read these</a></h3>
										<div class="post_meta">
											<a href="page-author.html" class="meta_author_avatar"><img src="assets/images/author-avatar.png" alt="author details"/></a>
											<span class="meta_author_name"><a href="page-author.html" class="author">Steven Job</a></span>
											<span class="meta_categories"><a href="archive.html">Politics</a>, <a href="archive.html">News</a></span>
											<span class="meta_date">18 Sep, 2023</span>
										</div>
									</div>
								</article>

							<div class="site-pagination ">
								<ul class="page-numbers">
									<li><a href="#" class="prev page-numbers">PREV</a></li>
									<li><span class="page-numbers current" aria-current="page">1.</span></li>
									<li><a href="#" class="page-numbers">2.</a></li>
									<li><a href="#" class="page-numbers">3.</a></li>
									<li><a href="#" class="page-numbers">4.</a></li>
									<li><a href="#" class="next page-numbers">NEXT</a></li>
								</ul>
							</div>
							</div>
						</div>
						
						<aside class="col-md-4">
							<div class="sidebar_right">
								<div class="sidebar-widget ">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Popular Articles</span></h4></div>
									<div class="latest_style_1">
										<div class="latest_style_1_item">
										<span class="item-count vertical-align">1.</span>
											<div class="alith_post_title_small">
												<a href="single.html"><strong>Ut enim ad minima veniam, quis nostrum</strong></a>
												<p class="meta"><span>2 Sep, 2023</span> <span>268 views</span></p>
											</div>
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-1.png" alt=""/></a></figure>
										</div>
										<div class="latest_style_1_item">
										<span class="item-count vertical-align">2.</span>
											<div class="alith_post_title_small">
												<a href="single.html"><strong>Curae lacinia consec tetur varius</strong></a>
												<p class="meta"><span>2 Sep, 2023</span> <span>268 views</span></p>
											</div>
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-2.png" alt=""/></a></figure>
										</div>
										<div class="latest_style_1_item">
										<span class="item-count vertical-align">3.</span>
											<div class="alith_post_title_small">
												<a href="single.html"><strong>Euismod lacus vulpu tate augue</strong></a>
												<p class="meta"><span>2 Sep, 2023</span> <span>268 views</span></p>
											</div>
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-3.png" alt=""/></a></figure>
										</div>
										<div class="latest_style_1_item">
										<span class="item-count vertical-align">4.</span>
											<div class="alith_post_title_small">
												<a href="single.html"><strong>Quam mauris lorem erat est euismod</strong></a>
												<p class="meta"><span>2 Sep, 2023</span> <span>268 views</span></p>
											</div>
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-4.png" alt=""/></a></figure>
										</div>
										<div class="latest_style_1_item">
										<span class="item-count vertical-align">5.</span>
											<div class="alith_post_title_small">
												<a href="single.html"><strong>Nec eget ince ptos aenean gravida</strong></a>
												<p class="meta"><span>2 Sep, 2023</span> <span>268 views</span></p>
											</div>
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-5.png" alt=""/></a></figure>
										</div>
									</div>
								</div> 

								<div class="sidebar-widget ">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Search</span></h4></div>
									<form action="#" class="search-form" method="get" role="search">
										<label>
											<input type="search" name="s" value="" placeholder="Search …" class="search-field"/>
										</label>
											<input type="submit" value="Search" class="search-submit"/>
									</form>
								</div> 

								<div class="sidebar-widget ">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Trending</span></h4></div>
									<div class="latest_style_2">
										<div class="latest_style_2_item_first">
											<figure class="alith_post_thumb_big">
												<span class="post_meta_categories_label">Legal, Blog</span>
												<a href="single.html"><img src="assets/images/thumb-large.jpeg" alt=""/></a>
											</figure>
											<h3 class="alith_post_title">
												<a href="single.html"><strong>Nor again is there anyone who loves or pursues or desires to obtain</strong></a>
											</h3>
										</div>
										<div class="latest_style_2_item">
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-1.png" alt=""/></a></figure>
											<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
											<div class="post_meta">
												<span class="meta_date">18 Sep, 2023</span>
											</div>
										</div>
										<div class="latest_style_2_item">
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-2.png" alt=""/></a></figure>
											<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
											<div class="post_meta">
												<span class="meta_date">18 Sep, 2023</span>
											</div>
										</div>
										<div class="latest_style_2_item">
											<figure class="alith_news_img"><a href="single.html"><img src="assets/images/thumb-square-3.png" alt=""/></a></figure>
											<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
											<div class="post_meta">
												<span class="meta_date">18 Sep, 2023</span>
											</div>
										</div>
									</div>
								</div> 

								<div class="sidebar-widget ">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Tags cloud</span></h4></div>
									<div class="alith_tags_all">
										<a href="#" class="alith_tagg">Business</a>
										<a href="#" class="alith_tagg">Technology</a>
										<a href="#" class="alith_tagg">Sport</a>
										<a href="#" class="alith_tagg">Art</a>
										<a href="#" class="alith_tagg">Lifestyle</a>
										<a href="#" class="alith_tagg">Three</a>
										<a href="#" class="alith_tagg">Photography</a>
										<a href="#" class="alith_tagg">Lifestyle</a>
										<a href="#" class="alith_tagg">Art</a>
										<a href="#" class="alith_tagg">Education</a>
										<a href="#" class="alith_tagg">Social</a>
										<a href="#" class="alith_tagg">Three</a>
									</div>
								</div>
							</div>
						</aside>
						
					</div>
					</div> 

				</div>
			</div>
			<div class="container-fluid">
				<div class="container ">
					<div class="bottom margin-15">
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">
								<div class="widget-title-cover"><h4 class="widget-title"><span>Most comments</span></h4></div>
								<div class="latest_style_3">
									<div class="latest_style_3_item">
									  <span class="item-count vertical-align">1.</span>
										<div class="alith_post_title_small">
											<a href="single.html"><strong>Frtuitous spluttered unlike ouch vivid blinked far inside</strong></a>
										</div>
									</div>
									<div class="latest_style_3_item">
									  <span class="item-count vertical-align">2.</span>
										<div class="alith_post_title_small">
											<a href="single.html"><strong>Against and lantern where a and gnashed nefarious</strong></a>
										</div>
									</div>
									<div class="latest_style_3_item">
									  <span class="item-count vertical-align">3.</span>
										<div class="alith_post_title_small">
											<a href="single.html"><strong>Ouch oh alas crud unnecessary invaluable some</strong></a>
										</div>
									</div>
									<div class="latest_style_3_item">
									  <span class="item-count vertical-align">4.</span>
										<div class="alith_post_title_small">
											<a href="single.html"><strong>And far hey much hello and bashful one save less</strong></a>
										</div>
									</div>
								</div>
							</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Latest</span></h4></div>
									<div class="latest_style_2">
										<div class="latest_style_2_item">
											<figure class="alith_news_img"><a href="single.html"><img alt="" src="assets/images/thumb-square-1.png" class="hover_grey"/></a></figure>
											<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
										</div>
										<div class="latest_style_2_item">
											<figure class="alith_news_img"><a href="single.html"><img alt="" src="assets/images/thumb-square-2.png" class="hover_grey"/></a></figure>
											<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>
										</div>
										<div class="latest_style_2_item">
											<figure class="alith_news_img"><a href="single.html"><img alt="" src="assets/images/thumb-square-3.png" class="hover_grey"/></a></figure>
											<h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Categories</span></h4></div>
									<ul class="bottom_menu">
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Business</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Entertainment</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Environment</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Health</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Life style</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Politics</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Technology</a></li>
										<li><a href="#" class=""><i class="fa fa-angle-right"></i>&nbsp;&nbsp; World</a></li>
									</ul>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">
									<div class="widget-title-cover"><h4 class="widget-title"><span>Instagram</span></h4></div>
									<ul class="alith-instagram-grid-widget alith-clr alith-row alith-gap-10">
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src={one} />
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-2.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-3.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-4.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-5.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-1.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-2.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-3.png"/>
											</a>
										</li>
										<li class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
											<a class="" target="_blank" href="#">
												<img class="" title="" alt="" src="assets/images/thumb-square-4.png"/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div> 
					</div>
				</div>
			</div>
			<div class="container-fluid alith_footer_right_reserved">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-12 bottom-logo">
							<h1 class="logo"><a href="index.html">HELLO WORLD</a></h1>
							<div class="tagline social">
								<ul>
									<li class="facebook"><a href=""><i class="fa fa-facebook"></i></a></li>
									<li class="twitter"><a href=""><i class="fa fa-twitter"></i></a></li>
									<li class="google-plus"><a href=""><i class="fa fa-google-plus"></i></a></li>
									<li class="instagram"><a href=""><i class="fa fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="col-12 col-md-12 coppyright"> <p>© Copyright 2023, All rights reserved. Design by <a href="https://alithemes.com" title="AliTheme">Alithemes.com</a></p> </div>
					</div>
				</div>
			</div>

			<div class="gototop js-top">
				<a href="#" class="js-gotop"><span>Take Me Top</span></a>
			</div>
		</div> 
		<script src="assets/js/jquery-3.7.0.min.js"></script>
	
		<script src="assets/js/owl.carousel.min.js"></script>

		<script src="assets/js/jquery.slicknav.min.js"></script>
		<script src="assets/js/masonry.pkgd.min.js"></script>
		<script src="assets/js/jquery.sticky-sidebar.js"></script>

	
		<script src="assets/js/main.js?v=2.0"></script>
		<script src="assets/js/smart-sticky.js?v=2.0"></script>

	</div> 
    </div>
  )
}

export default Banner