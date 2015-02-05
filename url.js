/**
 * Implements hook_field_formatter_view().
 */
function url_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {
    //dpm(items);
    var element = {};
    $.each(items, function(delta, item) {
        var title = item.title ? item.title : item.value
        element[delta] = {
          markup: theme(
            'button_link',
            { text: title, path: item.value, options: { InAppBrowser: true } }
          )
        };
    });
    return element;
  }
  catch (error) { console.log('url_field_formatter_view - ' + error); }
}
