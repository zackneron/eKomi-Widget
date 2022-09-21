<template>
	<div>
		<v-container class="review" v-if="isReviewHidden">
            <v-row>
                <v-col cols="12">
                    <div class="review__container">
                    	<div class="review__item" v-for="item in userReview" :key="item.username">
                    		<div class="user">
                				<div class="review__user d-flex justify-space-between">
                    				<div class="user__name">{{item.username}}</div>
                    				<div class="user__rate-progress">
                    					<v-rating
									      v-model="item.rate"
									      :length="item.length"
									      color="yellow darken-3"
									      background-color="grey lighten-1"
									      medium
									      class="rate-star"
									    ></v-rating>
                    				</div>
                    			</div>
                    			<div class="user__rate d-flex justify-space-between">
                    				<div class="user__rate-date">{{item.date}}</div>
                    				<div class="user__rate-value">
                    					<span class="counter-value">{{ item.rate }}</span> / 5
                    				</div>
                    			</div>
                			</div>
                			<div class="review__content">
                				<p class="content-text">{{item.content}}</p>
                				<img class="content-thumb" :src="item.thumb" :alt="item.alt">
                			</div>
                    	</div>
                    	<div class="review__item review__btn transparent pa-0 d-flex justify-center" color="transparent" width="100%">
                    		<v-btn depressed outlined>
	        					<v-icon left>
						        	mdi-plus-circle
						      	</v-icon>
						      	<span>Load more</span>
						    </v-btn>
                    	</div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
        	<v-row>
        		<v-col cols="12" class="pa-0">
        			<div class="d-flex justify-center mt-1">
        				<v-btn depressed @click="hideReviews" class="rounded-lg rounded-t-0 hide-reviews" large>
        					<v-icon left color="grey">
					        	{{chevUp}}
					      	</v-icon>
					      	<span class="mr-2 hide-reviews" color="grey">{{ isHidden }}</span>
					       
					      	<v-icon class="mr-0" left color="grey">
					        	{{chevUp}}
					      	</v-icon>
					    </v-btn>
        			</div>
        			
        		</v-col>
        	</v-row>
        </v-container>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				isReviewHidden: true,
				isHidden: 'Hide Reviews',
				chevUp: 'mdi-chevron-up',
				chevDown: 'mdi-chevron-down',
				userReview: [
					{
						username: 'Morgan',
						length: 5, 
						rate: 4,
						date: '27/03/2022',
						content : 'A lovely laptop, very fast response and excellent screen. Loving how the sharp the colors look!',
						thumb: require('../assets/Pic.png'),
						alt: 'eKomi Laptop'
					},
					{
						username: 'Zack',
						length: 5, 
						rate: 3,
						date: '29/03/2022',
						content : 'A lovely laptop, very fast response and excellent screen. Loving how the sharp the colors look!',
						thumb: require('../assets/Pic.png'),
						alt: 'eKomi Laptop'
					},
					{
						username: 'Neron',
						length: 5, 
						rate: 2,
						date: '29/04/2021',
						content : 'A lovely laptop, very fast response and excellent screen. Loving how the sharp the colors look!',
						thumb: require('../assets/Pic.png'),
						alt: 'eKomi Laptop'
					},
					{
						username: 'Nishal',
						length: 5, 
						rate: 1,
						date: '29/03/2022',
						content : 'A lovely laptop, very fast response and excellent screen. Loving how the sharp the colors look!',
						thumb: require('../assets/Pic.png'),
						alt: 'eKomi Laptop'
					},
					{
						username: 'Mutombo',
						length: 5, 
						rate: 5,
						date: '20/10/2021',
						content : 'A lovely laptop, very fast response and excellent screen. Loving how the sharp the colors look!',
						thumb: require('../assets/Pic.png'),
						alt: 'eKomi Laptop'
					},
				]
			}
		},
		methods: {
			hideReviews(){
				this.isReviewHidden = !this.isReviewHidden
				if(this.isHidden === 'Hide Reviews' && this.chevUp === 'mdi-chevron-up'){
					this.isHidden = 'Show Reviews'
					this.chevUp = 'mdi-chevron-down'
				} else {
					this.isHidden = 'Hide Reviews'
					this.chevUp = 'mdi-chevron-up'
				}
			}
		}
	}
</script>
<style lang="scss">
	.review {
		background: #F4F4F4;
		border: 1px solid #E3E3E3;
		border-radius: 0px 0px 4px 4px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		padding: 10px;
		gap: 10px;
		width: 100%;
		@media (max-width: 420px) {
			max-width: 350px;
		}

		@include sm {
	    	padding: 25px;
	    }

		&__container {
			display: flex;
    		gap: 10px;
    		flex-wrap: wrap;
    		@include md {
		    	gap: 15px;
		    }
		}

		& .review__item {
			background: $white;
			padding: 10px;
			border: 1px solid #E5E5E5;
			border-radius: 4px;
			
			@media (max-width: 420px) {
				max-width: 159px;
			}
			max-width: calc((100% / 2) - 5px);
			padding: 15px;
			@include md {
		    	max-width: calc((100% / 3) - 10px);
		    }
			button {
				border-width: 2px;
				font-weight: 300;
				font-size: 10px;
				line-height: 11px;
				text-transform: none;
				@include sm {
			    	font-size: 15px;
    				line-height: 16px;
			    }
			}
		}

		&__user {
			margin-bottom: 3px;
		}
	}
	.review__item {
		&.review__btn {
			width: 100%;
		}
	}
	.user {
		margin-bottom: 10px;
		&__rate {
			border-bottom: 1px solid #E5E5E5;
		}

		&__rate-date {
			color: #939393;
			font-weight: 300;
			font-size: 8px;
			line-height: 10px;
			margin-bottom: 10px;
			@include sm {
		    	font-size: 12px;
    			line-height: 13px;
		    }
		}

		&__rate-value {
			font-size: 9px;
    		line-height: 10.89px;
    		@include sm {
		    	font-size: 12px;
    			line-height: 13px;
		    }
			& .counter-value {
				font-size: 9px;
    			line-height: 10.89px;
    			@include sm {
			    	font-size: 12px;
	    			line-height: 13px;
			    }
			}
		}
	}

	.user__rate-progress {
		.rate-star .v-icon.v-icon {
		    width: 9.2px;
		    height: 8.81px;
		    font-size: 14px;
		    @include sm {
		    	font-size: 18px;
		    }
		    &:not(:last-child){
    			margin-right: -2px;
    			@include sm {
			    	margin-right: 1px;
			    }
			}
		}
	}
	
	.content-text {
		color: #656565;
	    font-family: "inter-italic";
    	font-weight: 300;
    	font-size: 10px;
    	line-height: 12px;
    	@include sm {
	    	font-size: 16px;
    		line-height: 18px;
	    }
	}
	.content-thumb {
		width: 100%;
	}
	.hide-reviews {
		color: #6d6d6d;
		background-color: #DEDEDE !important;
		font-weight: 400;
		font-size: 10px;
		line-height: 6px;
	}
</style>