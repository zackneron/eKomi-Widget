<template>
	<div>
		<v-container>
            <v-row>
                <v-col cols="12" class="pa-0">
                    <div class="main-widget widget">
                    	<div class="widget__container">
                    		<div class="widget__seal">
                    			<img src="~/assets/Seal.png" alt="eKomi logo">
                    			<h1>Excellent</h1>
                    			<p class="intro">Awarded the <span class="brand--text green--text darken-4" color="green darken-3">eKomi</span> Standard seal of approval!</p>
                    		</div>
                    		<div class="widget__content">
                    			<span class="review__score">28 reviews</span>
                    			<div class="star-rate">
                    				<span class="counter">
                    					<span class="counter-value">{{ rating }}</span> / 5
                    				</span>
                    				<span class="counter-star">
                    					<v-rating
									      v-model="rating"
									      :length="length"
									      color="yellow darken-3"
									      background-color="grey lighten-1"
									      medium
									      class="rate-star"
									    ></v-rating>
                    				</span>
                    			</div>
                    			<div class="rate-percentage" v-for="item in rateProgess" :key="item.status">
                    				<span class="rate-name">{{item.status}}</span>
                    				<div class="rate-value">
                    					<span class="value">{{item.rate}}%</span>
                    					<v-progress-linear
									      v-model="item.rate"
									      color="grey"
									      height="7"
									    ></v-progress-linear>
                    				</div>
                    			</div>
                    		</div>

                    	</div>
                    </div>
                </v-col>
            </v-row>
            
        </v-container>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				length: 5,
      			rating: 4,
				rateProgess:[
					{
						status: 'Positive',
						rate: 85,
					},
					{
						status: 'Neutral',
						rate: 10,
					},
					{
						status: 'Negative',
						rate: 5,
					}
				],
			}
		}
	}
</script>	
<style lang="scss">
	.v-progress-linear {
		width: 76px !important;
		height: 7px;
    	border-top-left-radius: 8px;
    	border-top-right-radius: 8px;
    	border-bottom-right-radius: 8px;
    	border-bottom-left-radius: 8px;
    	background: rgb(196 196 196 / 87%) !important;
		@include sm {
			width: 96px !important;
		}
		@include md {
			width: 106px !important;
		}
	}
	.v-progress-linear__determinate {
		height: 7px;
	    border-top-left-radius: 8px;
	    border-top-right-radius: 8px;
	    border-bottom-right-radius: 8px;
	    border-bottom-left-radius: 8px;
	}
	.rate-star {
		& .v-icon.v-icon {
			width: 23px;
    		height: 22px;

    		&:not(:last-child){
    			margin-right: 5px;
			}
    	}
	}

	.widget {
		&__container {
		    display: flex;
		    flex-direction: row;
		    max-width: 380px;
		    background: #EDEDED;
		    border: 1px solid #D3D3D3;
		    border-radius: 4px;
		    margin: auto;
		    overflow: hidden;
		    @include sm {
		    	max-width: 720px;
		    }
		}
		&__seal {
		    padding: 21px 15px;
		    text-align: center;
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		    gap: 10px;
		    max-width: 129px;
		    background: #EDEDED;
		    border-radius: 4px 0px 0px 4px;
		    width: 100%;
		    @include sm {
		    	max-width: 100%;
		    	min-width: 129px;
		    }
		}
		&__content {
		    padding: 20px;
		    display: flex;
		    flex-direction: column;
		    align-items: flex-start;
		    padding: 20px;
		    gap: 5px;
		    width: 100%;
	    	background: $white;
		}
	}

	h1 {
	    font-family: 'inter-extrabold';
	    font-style: normal;
	    font-weight: 900;
	    font-size: 12px;
	    line-height: 15px;
	    text-transform: uppercase;
	    @include sm {
	    	font-size: 20px;
    		line-height: 22px;
	    }
	}
	.intro {
	    font-size: 10px;
	    line-height: 12px;
	    letter-spacing: 0em;
	    text-align: center;
	    font-weight: 400;
	    margin-bottom: 0 !important;
	    @include sm {
	    	font-size: 16px;
    		line-height: 18px;
	    }
	}
	
	.review__score {
		color: #515151;
	    font-family: "inter-italic";
    	font-weight: 500;
    	font-size: 12px;
    	line-height: 14.52px;
    	@include sm {
	    	font-size: 16px;
    		line-height: 18px;
	    }
	}
	.star-rate {
	    display: flex;
	    gap: 10px;
	    align-items: center;
	}
	.counter {
	    font-weight: 700;
	    font-size: 18px;
	    line-height: 39px;
	}
	.counter-value {
		font-family: 'inter-extrabold';
	    font-size: 32px;
	}
	.counter-star {
	    display: flex;
	    gap: 5px;
	    align-items: center;
	}
	.rate-percentage {
	    font-family: 'Inter';
	    font-style: normal;
	    font-weight: 400;
	    font-size: 12px;
	    line-height: 15px;
	    display: flex;
	    align-items: flex-start;
	    gap: 20px;
	    @include sm {
	    	font-size: 16px;
    		line-height: 18px;
    		gap: 25px;
	    }
	}
	.rate-name {
	    width: 50px;
	    @include sm {
	    	width: 70px;
	    }
	}
	.rate-value {
	    display: flex;
	    align-items: baseline;
	    justify-content: space-between;
	    gap: 10px;
	    @include sm {
    		gap: 18px;
	    }
	}
	.value {
	    width: 25px;
	}
	.brand--text {
    	font-family: "inter-bold";
	}

</style>