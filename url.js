/**
 * Implements hook_field_formatter_view().
 */
function url_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {
    //dpm(items);
    var element = {};
    $.each(items, function(delta, item) {
        element[delta] = {
          markup: theme('url', { item: item })
        };
    });
    return element;
  }
  catch (error) { console.log('url_field_formatter_view - ' + error); }
}

/**
 * Themes a URL.
 */
function theme_url(variables) {
  try {
    var title = variables.item.title ? variables.item.title : variables.item.value;
    return theme('button_link', {
        text: title,
        path: variables.item.value,
        options: {
          InAppBrowser: true
        }
    });
  }
  catch (error) { console.log('theme_url - ' + error); }
}
