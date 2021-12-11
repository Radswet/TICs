var handlebars = require('handlebars');

handlebars.registerHelper('date', require('helper-date'));

handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

handlebars.registerHelper("sum", function(value)
{
    let total=0;
    total = value[1];
    return total;
});