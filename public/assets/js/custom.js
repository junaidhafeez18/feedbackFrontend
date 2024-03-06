$(document).ready(function() {
    var text = "find inspiration";
    var delay = 1000; // 1s delay
    var typingSpeed = 50;
    var i = 0;
    
    function type() {
      if (i < text.length) {
        $('#typewrite').append(text.charAt(i));
        i++;
        setTimeout(type, typingSpeed);
      }
    }
    
    setTimeout(function() {
      type();
    }, delay);
  });
  $(document).ready(function() {
    var text = "Thankyou for attending our event!";
    var delay = 300; // 0.3s delay
    var typingSpeed = 50;
    var i = 0;
    
    function type() {
      if (i < text.length) {
        $('#typewrite2').append(text.charAt(i));
        i++;
        setTimeout(type, typingSpeed);
      }
    }
    
    setTimeout(function() {
      type();
    }, delay);
  });
















  // interactive rating system 
$(document).ready(function() {
    var isMouseDown = false;
    var currentRating = 0;
    var totalRating = 10;
  
    $('.ratingSingle-inner').each(function() {
      var barInner = $(this);
      var barFills = barInner.find('.star-fill');
      var totalRatingDisplay = barInner.find('.total-rating');
  
      barFills.mousedown(function() {
        isMouseDown = true;
        $(this).addClass('filled');
        currentRating = $(this).index() + 1;
        updateTotalRating();
      });
  
      barFills.mouseover(function() {
        if (isMouseDown) {
          $(this).addClass('filled');
          var newRating = $(this).index() + 1;
          if (newRating > currentRating) {
            currentRating = newRating;
            updateTotalRating();
          }
        } else {
          $(this).addClass('filled-hover');
          $(this).prevAll('.star-fill').addClass('filled-hover');
        }
      }).mouseout(function() {
        $(this).removeClass('filled-hover');
        $(this).prevAll('.star-fill').removeClass('filled-hover');
      });
  
      barInner.click(function(event) {
        var clickedIndex = $(event.target).index();
        currentRating = clickedIndex + 1;
        barFills.removeClass('filled');
        barFills.removeClass('filled-hover');
        barFills.filter(':lt(' + currentRating + ')').addClass('filled');
        updateTotalRating();
      });
  
      function updateTotalRating() {
        var totalRatings = 0;
        var totalFilled = 0;
      
        $('.ratingSingle-inner').each(function() {
          var filled = $(this).find('.filled').length;
          totalRatings += filled;
          totalFilled += filled > 0 ? 1 : 0;
        });
      
        totalRatingDisplay.text(currentRating + '.' + 0);        
      }
      
    });
  
    $(document).mouseup(function() {
      isMouseDown = false;
    });
  });