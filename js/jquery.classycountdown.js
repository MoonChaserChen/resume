/*!
 * jQuery ClassyCountdown
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.0.0
 *
 */

(function($) {
    $.fn.ClassyCountdown = function(options, callback) {
        var defaultTheme = "flat-colors-black";
        var element = $(this);
        var isFired = false;
        var settings = {
            onEndCallback: function() {
            }
        };
        settings = $.extend(true, settings, getPreset(options.theme ? options.theme : defaultTheme));
        settings = $.extend(true, settings, options);
        prepare();
        doTick();
        doResponsive();
        
        function prepare() {
            element.append('<div class="ClassyCountdown-wrapper">' +
                            '<div class="ClassyCountdown-seconds">' +
                                '<input type="text" />' +
                                '<span class="ClassyCountdown-value"><span class="skillTitle"></span></span>' +
                            '</div>' +
                        '</div>');
            element.find('.ClassyCountdown-seconds input').knob($.extend({
                width: '100%',
                displayInput: false,
                readOnly: true,
                max: 100
            }, settings.style.seconds.gauge));
            element.find('.ClassyCountdown-wrapper > div').attr("style", settings.style.element);
            element.find('.ClassyCountdown-seconds').attr('style', "float:left");
            element.find('.ClassyCountdown-seconds .ClassyCountdown-value').attr('style', settings.style.seconds.textCSS);
            element.find('.ClassyCountdown-value').each(function() {
                $(this).css('margin-top', Math.floor(0 - (parseInt($(this).height()) / 2)) + 'px');
            });
            if (settings.labels) {
                element.find(".ClassyCountdown-seconds .ClassyCountdown-value > span").last().html(options.title);
                // element.find(".ClassyCountdown-value > span").attr("style", settings.labelsOptions.style);
            }
        }

        function doTick() {
            element.find('.ClassyCountdown-seconds input').last().val(options.value).trigger('change');
        }
        
        function doResponsive() {
            element.find('.ClassyCountdown-wrapper > div').each(function() {
                $(this).css('height', $(this).width() + 'px');
            });
            if (settings.style.textResponsive) {
                element.find('.ClassyCountdown-value').css('font-size', Math.floor(element.find('> div').eq(0).width() * settings.style.textResponsive / 10) + 'px');
                element.find('.ClassyCountdown-value').each(function() {
                    $(this).css('margin-top', Math.floor(0 - (parseInt($(this).height()) / 2)) + 'px');
                });
            }
            $(window).trigger('resize');
            $(window).resize($.throttle(50, onResize));
        }

        function onResize() {
            element.find('.ClassyCountdown-wrapper > div').each(function() {
                $(this).css('height', $(this).width() + 'px');
            });
            if (settings.style.textResponsive) {
                element.find('.ClassyCountdown-value').css('font-size', Math.floor(element.find('> div').eq(0).width() * settings.style.textResponsive / 10) + 'px');
            }
            element.find('.ClassyCountdown-value').each(function() {
                $(this).css("margin-top", Math.floor(0 - (parseInt($(this).height()) / 2)) + 'px');
            });
            element.find('.ClassyCountdown-seconds input').trigger('change');
        }
        
        function getPreset(theme) {
            switch (theme) {
                case 'flat-colors':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#1abc9c"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#2980b9"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#8e44ad"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#f39c12"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'flat-colors-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#1abc9c"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#2980b9"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#8e44ad"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#f39c12"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'flat-colors-very-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#1abc9c"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#2980b9"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#8e44ad"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#f39c12"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'flat-colors-black':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#1abc9c",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#2980b9",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#8e44ad", lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#f39c12",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'black':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.01,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'black-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'black-very-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.17,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.17,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.17,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.17,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'black-black':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(0,0,0,0.05)",
                                    fgColor: "#222",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                            }
                        }
                    };
                case 'white':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.03,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            }
                        }
                    };
                case 'white-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.06,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.06,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.06,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.06,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            }
                        }
                    };
                case 'white-very-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.16,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.16,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.16,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.16,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff"
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            }
                        }
                    };
                case 'white-black':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.5,
                            days: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.25,
                                    bgColor: "rgba(255,255,255,0.05)",
                                    fgColor: "#fff",
                                    lineCap: 'round'
                                },
                                textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                            }
                        }
                    };
            }
        }
    };

    $.fn.generateList = function(titleValueList) {
        var div = $(this);
        titleValueList.forEach(function (element) {
            div.ClassyCountdown({
                title: element.title,
                value: element.value
            });
        });
        ani(titleValueList);
    }

    function getValueByTitle(titleValueList, tit) {
        var result;
        titleValueList.forEach(function(v) {
            if (v.title == tit) {
                result = v.value;
            }
        });
        return result;
    };

    var show_time = 500;
    var slice_number = 50;
    var slice_time = show_time / slice_number;

    function sliceValue(number) {
        var arr = [];
        for (var i = 0; i <= slice_number; i++) {
            var v = number*i/slice_number;
            arr.push(v);
        }
        return arr;
    }

    function ani(titleValueList) {
        $(".ClassyCountdown-seconds").mouseenter(function(){
            var $el = $(this);
            var original_val = getValueByTitle(titleValueList, $el.find(".skillTitle").html());
            var current_val = $(this).find("input").val();
            if (current_val != original_val) {
                return;
            }
            var value_arr = sliceValue(original_val);
            var id = setInterval(function(){
                var slice_value = value_arr.shift();
                $el.find("input").val(slice_value).trigger('change');
                if (value_arr.length == 0) {
                    clearInterval(id);
                }
            }, slice_time);
        });
    }
})(jQuery);

