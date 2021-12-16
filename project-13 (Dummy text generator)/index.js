/*
1. Collect paragraph in a array
2. Select elements
3. Event listener
4. Basic valitation
*/


let dummyText = [
    'Biscuit candy canes jelly fruitcake sweet brownie apple pie donut chocolate. Apple pie topping chocolate muffin sugar plum caramels soufflé. Sesame snaps chocolate tiramisu brownie lollipop sweet roll dragée halvah. Icing icing cupcake sweet sweet jelly-o jelly. Cake pastry pudding gummies marzipan cookie powder ice cream danish. Lollipop topping muffin cake pastry liquorice. Pastry candy cotton candy gummi bears chocolate cake tiramisu dragée. Soufflé chupa chups powder jelly-o wafer marzipan wafer dragée pie. Caramels icing marzipan icing apple pie danish bonbon. Ice cream sweet roll cake cheesecake chocolate jelly-o lemon drops gingerbread powder. Chupa chups brownie chocolate jujubes liquorice carrot cake croissant chocolate cake. Macaroon wafer chocolate cake marshmallow sugar plum wafer macaroon wafer oat cake. Chocolate bar tiramisu cake jelly beans chupa chups candy canes. Tootsie roll dessert chocolate cake cake bonbon bonbon danish candy chocolate.',

    'Cotton candy cheesecake jelly beans apple pie topping. Cookie sugar plum fruitcake sugar plum candy canes cake caramels icing. Soufflé candy canes tiramisu candy lollipop sesame snaps chocolate bar candy sugar plum. Fruitcake lollipop shortbread tiramisu sesame snaps marzipan caramels. Cupcake oat cake pie toffee biscuit. Halvah marshmallow soufflé tootsie roll apple pie shortbread. Sweet pudding cookie biscuit liquorice tiramisu gingerbread toffee gingerbread. Chocolate bar macaroon cake tootsie roll soufflé gingerbread. Icing apple pie dessert pudding halvah icing oat cake chocolate cupcake. Gingerbread gummi bears chocolate bar bonbon cake jujubes lemon drops. Croissant carrot cake cupcake marzipan biscuit chupa chups. Sugar plum jujubes jelly beans sweet roll candy croissant cupcake. Topping gummies macaroon macaroon sweet roll. Candy tart halvah cake apple pie dragée sesame snaps.',

    'Gummies cheesecake pastry candy canes tootsie roll apple pie danish. Dessert cheesecake chocolate bar topping gingerbread jelly-o gummies oat cake toffee. Pastry chupa chups jelly beans cake chocolate halvah gingerbread caramels. Wafer lollipop lemon drops muffin gummi bears cupcake cheesecake jelly. Danish carrot cake tiramisu cupcake marshmallow. Jelly-o biscuit apple pie chocolate cake jelly-o toffee cupcake lemon drops. Jujubes shortbread jujubes gingerbread tiramisu. Cake jelly-o marzipan toffee caramels. Macaroon caramels dessert bear claw sweet roll bear claw cake. Croissant jelly marshmallow icing jelly marzipan sesame snaps. Oat cake muffin cheesecake lemon drops croissant caramels sweet roll fruitcake tart. Caramels pastry donut tootsie roll jelly beans lemon drops cake dessert.',

    'Marshmallow chocolate chocolate cake toffee caramels biscuit. Fruitcake chupa chups macaroon tart jelly beans shortbread brownie oat cake cake. Donut liquorice bear claw marzipan gingerbread tootsie roll. Caramels fruitcake jelly beans pudding pastry jelly-o. Jelly-o toffee chocolate pie bear claw gummies. Jelly-o pie chocolate cake muffin dragée. Sesame snaps sesame snaps bear claw topping chocolate candy pudding. Chocolate bar cake brownie dessert jelly-o liquorice icing. Muffin lemon drops pie tootsie roll bear claw. Bonbon muffin danish jelly-o cotton candy. Lemon drops shortbread lemon drops ice cream fruitcake. Pudding icing chocolate cake sugar plum icing biscuit marzipan cake icing. Lollipop muffin dragée tiramisu chocolate cake candy cotton candy gummi bears ice cream.',

    'Liquorice dessert toffee brownie chocolate cake. Wafer jujubes candy lollipop gummies. Chocolate dragée croissant candy canes marshmallow cake cotton candy donut. Apple pie pastry chocolate cake marzipan bear claw chocolate bonbon toffee lollipop. Apple pie sugar plum gummi bears sweet topping. Dragée jelly-o jelly-o cake sesame snaps marshmallow. Gummies sweet roll cookie pudding croissant. Sweet gummies jelly beans dessert cake pudding sesame snaps gingerbread. Sugar plum sweet roll dessert gummi bears powder icing croissant croissant chocolate cake. Pie danish dragée biscuit dragée tootsie roll pastry. Liquorice candy canes soufflé donut halvah ice cream cake croissant cotton candy. Cotton candy jujubes cake sweet roll ice cream topping toffee.',

    'Lemon drops icing marzipan danish jelly-o sugar plum gummies. Carrot cake brownie macaroon macaroon wafer. Chupa chups caramels chocolate topping sesame snaps muffin topping sweet roll liquorice. Icing muffin halvah tiramisu candy canes dessert chupa chups dragée halvah. Gummies tart tiramisu cheesecake ice cream marshmallow bear claw. Apple pie lemon drops bonbon tart cake jelly-o macaroon oat cake toffee. Danish croissant chocolate dragée jelly cake sugar plum chupa chups croissant. Chocolate bar lemon drops chocolate bar jujubes jelly beans sweet roll. Tart jelly marshmallow tart oat cake pudding pie marshmallow. Tootsie roll carrot cake dessert chocolate cake. Caramels tart sesame snaps powder brownie oat cake tiramisu gummies marzipan. Topping cake cotton candy pudding chocolate cake tiramisu jelly beans ice cream. Jelly gummi bears lemon drops liquorice biscuit candy canes. Gummies bonbon jelly beans sweet jelly beans.',

    'Muffin cotton candy pie sweet bonbon jelly beans. Lollipop cupcake caramels jelly beans icing candy canes cake soufflé cupcake. Jelly muffin marshmallow topping marshmallow chupa chups cake lemon drops. Icing sesame snaps pastry sesame snaps powder gingerbread apple pie. Macaroon danish dessert tart oat cake cupcake cotton candy. Icing tiramisu brownie dragée cake caramels gummies liquorice. Jujubes bear claw liquorice jelly wafer caramels. Cake lemon drops candy cheesecake caramels. Tiramisu sugar plum marzipan marshmallow carrot cake. Pastry fruitcake tootsie roll liquorice marshmallow jelly beans powder wafer jelly beans. Cheesecake gummi bears cheesecake lollipop topping sweet roll lollipop brownie dessert. Danish chocolate biscuit donut chocolate icing. Candy canes halvah powder sugar plum macaroon lemon drops caramels chocolate cake.',

    'Halvah macaroon powder cupcake tootsie roll icing pudding. Marshmallow muffin tart sesame snaps toffee tootsie roll jelly beans muffin biscuit. Dragée muffin wafer tart cookie. Pastry cupcake tiramisu caramels caramels marzipan tootsie roll lemon drops. Icing bear claw macaroon candy canes liquorice croissant bear claw. Muffin jelly beans dragée cotton candy oat cake cotton candy dragée powder. Biscuit cake chocolate marshmallow pastry. Croissant carrot cake biscuit shortbread bonbon candy canes. Cupcake apple pie pudding powder jujubes marzipan. Bear claw toffee jelly-o marzipan liquorice sweet cupcake chocolate bar. Sweet roll tootsie roll gummies bonbon chocolate cake pastry candy canes. Fruitcake lollipop jelly-o shortbread gummies sweet roll dessert bonbon biscuit. Sweet roll jelly jujubes gummi bears topping dessert jelly-o dessert sweet.',

    'Muffin sweet chocolate bar tootsie roll cupcake candy canes. Pastry bear claw wafer shortbread sweet roll cake fruitcake toffee. Apple pie tart muffin croissant danish. Muffin croissant topping wafer halvah sugar plum wafer danish shortbread. Chupa chups halvah bonbon cake chocolate bar. Chupa chups pudding fruitcake dragée cake cheesecake danish dragée shortbread. Cake carrot cake liquorice shortbread jelly beans. Lollipop jelly-o dessert tiramisu bonbon pie chocolate dragée bonbon. Bear claw jelly tart pudding candy cookie gummies ice cream. Jujubes pudding marzipan marzipan candy canes oat cake jelly-o brownie icing. Cotton candy jelly beans macaroon cake topping topping. Caramels pie lollipop tart sweet roll. Tart bonbon brownie sugar plum candy canes croissant.'
];

let form = document.getElementById('form');
let amount = document.getElementById('amount');
let result = document.getElementById('result');


form.addEventListener('submit',function(e){
    e.preventDefault();
    let number = parseInt(amount.value);
    
    let randomNumber = Math.floor(Math.random() * dummyText.length);
    
    if (number <= 0 || number == null || number == undefined || number > 9){
        result.innerHTML = `<p> ${dummyText[randomNumber]} </p>`
    }else{
        let slice  = dummyText.slice(0,number);
        let finalArray = slice.map(function(singleDummy){
            return `<p> ${singleDummy} </p>`;
            
        })
        result.innerHTML = finalArray;
    }
    
}) 

