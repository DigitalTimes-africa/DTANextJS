from wagtail.images.formats import Format, register_image_format, unregister_image_format

unregister_image_format('fullwidth')
unregister_image_format('left')
unregister_image_format('right')
register_image_format(Format('fullwidth', 'Full width', 'richtext-image img-responsive full-width', 'width-800' ))
register_image_format(Format('left', 'Left-aligned', 'richtext-image img-responsive pull-left', 'max-300x300'))
register_image_format(Format('right', 'Right-aligned', 'richtext-image img-responsive pull-right', 'max-300x300'))