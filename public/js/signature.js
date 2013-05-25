var app = app || {};

(function (app) {

  var maxLength = 30;

  var data = ["M20.903,85.402", "c-0.347,8.334,1.389,12.153,9.722,12.848", "c27.431,2.777,53.819-17.361,60.069-43.403 ", "c3.472-15.972-10.764-21.875-24.653-16.667", "c-28.472,10.069-31.944,51.736-8.333,68.402", "c13.889,9.723,31.597,8.681,44.097-2.431 ", "c3.472-3.472,14.931-18.402,7.986-23.61", "c-4.861-3.819-8.68,4.166-7.292,8.681", "c2.083,6.597,15.625,9.027,20.833,5.208 ", "c1.736-1.389,7.639-12.848,4.861-15.278", "c-3.125-2.777-7.292,5.209-7.639,6.945", "c-2.778,15.277,25.42,4.951,22.917,2.083 s-2.083,6.597,1.736,7.986", "c18.055,6.597,37.5-26.389,38.542-40.625", "c1.389-21.18-22.917,0.695-26.389,9.028 ", "c-5.208,13.194,0,43.403,17.708,45.833", "c10.764,1.39,19.098-11.11,19.444-20.833", "c0-8.681-5.902-8.681-8.681-1.042 ", "c-3.472,11.111,8.334,12.153,15.973,9.028", "c5.208-2.083,20.486-11.111,13.889-19.098", "c-4.861-6.25-8.681,3.125-9.722,7.292 ", "c-2.431,9.723,1.389,19.098,11.805,21.527", "c14.931,3.125,32.292-7.639,42.709-17.36", "c6.597-5.903,17.708-22.917,9.027-31.945 ", "c-6.944-6.597-14.931,1.736-18.056,7.639", "c-6.25,12.5-11.11,41.666,4.515,49.306", "c8.68,4.166,43.402,3.125,45.139-11.111 ", "c0.347-3.819-2.084-5.903-3.473-1.389", "c6.25,3.125,13.542-2.084,18.75,0", "c4.514,1.735,4.167,7.291,11.111,2.777"];

  app.Signature = function () {
    this.init = function (svgClass, inputClass) {
/*      this.$signature = $signature;
      path = $signature.find("path")[0];
      $(path).attr("stroke-dasharray", path.getTotalLength());
      console.log(path, path.getTotalLength());
      $(path).append('<animate xmlns="http://www.w3.org/2000/svg" attributeName="stroke-dashoffset" from="800" to="0" dur="3s" begin="0s"/>')
      $signature.append()
*/
      var svg = d3.select(svgClass);


      var line = function (d) {
        return d.join("")
      }
      var path = svg.append('path')
        .attr('class', 'signature-writing')
        .attr('d', data[0])

      var prev = 0

      d3.select(inputClass).on("keydown", function(){
        var length = $(this).val().length
        var cur = 1 + Math.round((data.length - 1) * length / maxLength)

        var pathTween = function () { 
          var interpolate = d3.scale.quantile()
          .domain([0,1]) 
          .range(d3.range(1, cur));
          return function(t) {
            return line(data.slice(0, interpolate(t)));
          };
        }

        path
          .transition()
          .duration(2000)
          .attrTween('d', pathTween);

      });
    }
  }
})(app);

