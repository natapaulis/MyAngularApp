(function(){

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller("ReadingListController", function(){
    this.books = books;
    this.genres = genres;
})
.directive("bookGenre", function(){
    return {
        restrict: "E",
        templateUrl: "partials/book-genre.html",
        scope: {
            genres: "="
        }
    };
})
.directive("bookCover", function(){
    return {
        restrict: "E",
        templateUrl: "partials/book-cover.html",
        replace: "true"
    }
})
.directive("reviewForm", function(){
    return {
        restrict: "E",
        templateUrl: "partials/review-form.html",
        replace: true,
        controller: function(){
            this.book = {genres:{}};
            this.addReview = function(form){
                books.push(this.book);
                this.book = {genres:{}};
                form.$setPristine();
            }
        },
        controllerAs: "reviewFormCtrl",
        scope: {
            books: "=",
            genres: "="
        }
    }
});


var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

var books = [
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        isbn: '0143039431',
        review: 'I think, and with earnest and honest consideration . . . that The Grapes of Wrath is the greatest American novel I have ever read.',
        rating: 5,
        genres: { fiction: true }
    },
    {
        title: 'David and Goliath',
        author: 'Malcolm Gladwell',
        isbn: '0316204374',
        review: "Gladwell has made a career out of questioning conventional wisdom, and here he examines the allegedly unlikely triumph of the weak over the mighty and shows it's not so unlikely after all",
        rating: 4,
        genres: { 'non-fiction': true }
    },{
        title: 'The Reader',
        author: 'Bernhard Schlink',
        isbn: '0375707972',
        review: "Arresting, philosophically elegant, morally complex. . . . Mr. Schlink tells his story with marvelous directness and simplicity",
        rating: 5,
        genres: { fiction: true }
    },{
        title: 'Freedom',
        author: 'Jonathan Franzen',
        isbn: '0312576463',
        review: 'Mr. Franzen has written his most deeply felt novel yet--a novel that turns out to be both a compelling biography of a dysfunctional family and an indelible portrait of our times.',
        rating: 4,
        genres: { fiction: true }
    },{
        title: 'The Luminaries',
        author: 'Eleanor Catton',
        isbn: '0316074292',
        review: "The type of novel that you will devour only to discover that you can't find anything of equal scope and excitement to read once you have finished...Do yourself a favour and read The Luminaries.",
        rating: 5,
        genres: { fiction: true, mystery: true }
    },{
        title: 'The Goldfinch',
        author: 'Donna Tartt',
        isbn: '0316055441',
        review: "Dazzling....A glorious, Dickensian novel, a novel that pulls together all Ms. Tartt's remarkable storytelling talents into a rapturous, symphonic whole and reminds the reader of the immersive, stay-up-all-night pleasures of reading",
        rating: 5,
        genres: { fiction: true }
    }, {
        title: "Travels with Herodotus",
        author: 'Ryszard Kapuscinski',
        isbn: '1400078784',
        review: "Enchanting. . . . Underneath its shimmering prose beats the unquiet heart of a fundamentally decent man and an uncommonly gifted observer. . . . It has a startling clarity and power",
        rating: 5,
        genres: { 'non-fiction': true }
    }, {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        isbn: '0060883286',
        review: 'The first piece of literature since the Book of Genesis that should be required reading for the entire human race.',
        rating: 5,
        genres: { fiction: true }
    }, {
        title: 'Middlesex',
        author: 'Jeffrey Eugenides',
        isbn: '0312427735',
        review: 'Unprecedented, astounding. . . . The most reliably American story there is: A son of immigrants finally finds love after growing up feeling like a freak.',
        rating: 5,
        genres: { fiction: true }
    },{
        title: 'Dear Life',
        author: 'Alice Munro',
        isbn: '0307743721',
        review: 'Unquestionable evidence of her unfaded abilities. . . . Reading these stories will tell you something about Alice Munro’s life, but it will tell you more about Alice Munro’s mind—and, not entirely surprisingly, this proves to be even more compelling.',
        rating: 5,
        genres: { fiction: true }
    },{
        title: 'My Name Is Red',
        author: 'Orhan Pamuk',
        isbn: '0375706852',
        review: 'Most enchanting . . . Playful, intellectually challenging, with an engaging love story and a full canvas of memorable characters, My Name is Red is a novel many, many people will enjoy.',
        rating: 5,
        genres: { fiction: true }
    }

  ];
})();
