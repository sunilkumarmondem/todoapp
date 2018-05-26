//variables

const tweetlist = document.getElementById('tweet-list');




//event listeners
eventlisten();

function eventlisten(){
	document.querySelector('#form').addEventListener('submit',newtweet);

	tweetlist.addEventListener('click',removetweet);

	document.addEventListener('DOMContentLoaded',printvalues);
}




//functions

function newtweet(e){
	e.preventDefault();

	const tweet = document.getElementById('tweet').value;
	const li = document.createElement('li');
	li.textContent=tweet;
	tweetlist.appendChild(li);
	const removebtn=document.createElement('a');
	removebtn.classList='remove-tweet';
	removebtn.textContent='X';

	
	li.appendChild(removebtn);

	addtolocal(tweet);
}

function addtolocal(tweet){
	let tweets = getfromlocal();
	tweets.push(tweet);
	localStorage.setItem('tweets',JSON.stringify(tweets));

}

function getfromlocal(){
	let tweets;
	const tweetsls=localStorage.getItem('tweets');
	if(tweetsls===null){
		tweets=[];
	}else{
		tweets=JSON.parse(tweetsls);
	}
	return tweets;
}

function removetweet(e){
	if(e.target.classList.contains('remove-tweet')){
		e.target.parentElement.remove();
	}
	
	
}

function printvalues(){
	let tweets=getfromlocal();

	tweets.forEach(function(tweet){

					const li = document.createElement('li');
					li.textContent=tweet;
					
					const removebtn=document.createElement('a');
					removebtn.classList='remove-tweet';
					removebtn.textContent='X';

					
					li.appendChild(removebtn);
					tweetlist.appendChild(li);

					
	})
}


