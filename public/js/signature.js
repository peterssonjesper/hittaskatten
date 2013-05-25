var app = app || {};

(function (app) {

  var maxLength = 18;


  var data = ["M26.903,82.402","c-0.043,1.042-0.054,2.014-0.023,2.916","c0.03,0.904,0.102,1.739,0.224,2.51s0.294,1.476,0.525,2.119","c0.231,0.643,0.521,1.223,0.88,1.744","c0.358,0.521,0.784,0.981,1.286,1.386","c0.502,0.403,1.082,0.751,1.747,1.044s1.415,0.531,2.259,0.719s1.783,0.323,2.825,0.41","c3.429,0.348,6.841,0.336,10.2,0.001","c3.359-0.336,6.665-0.996,9.879-1.948","c3.215-0.952,6.338-2.196,9.334-3.698","c2.995-1.503,5.862-3.263,8.564-5.249","c2.702-1.985,5.238-4.196,7.572-6.599","c2.333-2.403,4.464-4.998,6.355-7.751s3.541-5.666,4.915-8.703","c1.374-3.038,2.469-6.201,3.25-9.456","c0.434-1.997,0.591-3.836,0.507-5.516s-0.41-3.2-0.941-4.56","c-0.532-1.359-1.27-2.557-2.178-3.591","c-0.909-1.034-1.988-1.905-3.204-2.61s-2.566-1.245-4.017-1.617","c-1.451-0.373-3.003-0.577-4.62-0.613","c-1.617-0.035-3.299,0.099-5.01,0.405","c-1.712,0.306-3.454,0.783-5.189,1.434","c-3.559,1.259-6.727,3.011-9.501,5.147","c-2.773,2.135-5.153,4.654-7.133,7.445s-3.562,5.855-4.741,9.082","c-1.179,3.226-1.954,6.614-2.323,10.054s-0.331,6.931,0.118,10.363","c0.449,3.432,1.309,6.805,2.584,10.009","c1.275,3.204,2.965,6.237,5.074,8.991","c2.109,2.754,4.637,5.229,7.589,7.312","c1.736,1.216,3.532,2.263,5.37,3.143s3.718,1.594,5.622,2.142s3.833,0.931,5.769,1.148","c1.936,0.219,3.878,0.273,5.809,0.165s3.852-0.38,5.744-0.812s3.755-1.026,5.573-1.781","c1.817-0.755,3.589-1.669,5.296-2.741","c1.708-1.073,3.352-2.305,4.914-3.693","c0.434-0.434,0.993-1.047,1.625-1.798s1.337-1.64,2.064-2.624s1.476-2.065,2.194-3.201s1.408-2.326,2.016-3.531","c0.607-1.204,1.134-2.422,1.527-3.612","c0.393-1.189,0.653-2.353,0.729-3.445s-0.033-2.117-0.377-3.031","c-0.344-0.913-0.925-1.716-1.793-2.367","c-0.608-0.478-1.199-0.771-1.766-0.909","c-0.566-0.138-1.109-0.121-1.619,0.02s-0.987,0.406-1.424,0.768","c-0.437,0.36-0.833,0.816-1.18,1.337s-0.646,1.106-0.887,1.728","c-0.242,0.621-0.426,1.277-0.545,1.939s-0.173,1.33-0.155,1.973","c0.02,0.643,0.111,1.262,0.285,1.826","c0.261,0.824,0.7,1.584,1.28,2.274s1.3,1.312,2.122,1.859s1.746,1.022,2.732,1.42s2.037,0.718,3.111,0.956s2.173,0.396,3.257,0.468s2.155,0.058,3.172-0.045s1.981-0.296,2.854-0.582","c0.873-0.286,1.654-0.665,2.305-1.143","c0.217-0.173,0.499-0.504,0.821-0.955","c0.322-0.451,0.684-1.022,1.061-1.676s0.77-1.391,1.151-2.173","c0.382-0.781,0.753-1.609,1.089-2.444s0.637-1.679,0.878-2.494","c0.241-0.814,0.421-1.601,0.516-2.319s0.104-1.371,0.003-1.92s-0.312-0.993-0.66-1.297","c-0.391-0.347-0.797-0.526-1.211-0.57","c-0.414-0.044-0.834,0.047-1.252,0.24s-0.833,0.487-1.235,0.85","c-0.403,0.363-0.794,0.795-1.163,1.261s-0.716,0.968-1.032,1.472s-0.601,1.01-0.845,1.485","c-0.244,0.475-0.447,0.918-0.601,1.298","c-0.153,0.379-0.256,0.693-0.3,0.91","c-0.347,1.91-0.21,3.42,0.29,4.594","c0.5,1.174,1.364,2.013,2.471,2.58","c1.107,0.568,2.457,0.865,3.93,0.955","c1.473,0.091,3.067-0.025,4.665-0.283","c1.597-0.258,3.196-0.657,4.678-1.134","c1.481-0.477,2.844-1.03,3.968-1.596","c1.124-0.566,2.009-1.146,2.535-1.672","c0.526-0.527,0.693-1.003,0.38-1.361s-0.58-0.524-0.801-0.538","c-0.22-0.013-0.395,0.127-0.521,0.38s-0.206,0.619-0.236,1.058","c-0.031,0.439-0.013,0.951,0.055,1.497s0.184,1.124,0.351,1.696","c0.167,0.572,0.385,1.137,0.653,1.656s0.589,0.992,0.961,1.378s0.797,0.687,1.274,0.859","c2.257,0.825,4.536,1.03,6.797,0.732","c2.262-0.299,4.506-1.103,6.695-2.296s4.322-2.777,6.362-4.639","c2.04-1.86,3.984-3.998,5.796-6.299","c1.812-2.301,3.491-4.764,4.999-7.275","c1.507-2.512,2.843-5.073,3.969-7.568s2.041-4.926,2.708-7.178","c0.666-2.251,1.084-4.324,1.215-6.104","c0.174-2.647-0.055-4.622-0.593-6.035s-1.388-2.263-2.456-2.662s-2.357-0.346-3.774,0.048","c-1.418,0.394-2.964,1.129-4.548,2.095s-3.207,2.162-4.776,3.478","c-1.569,1.316-3.085,2.753-4.458,4.199s-2.602,2.901-3.596,4.256","c-0.995,1.354-1.754,2.607-2.188,3.649","c-0.651,1.649-1.14,3.564-1.461,5.658","c-0.321,2.093-0.476,4.365-0.46,6.728","c0.017,2.363,0.204,4.816,0.566,7.273","c0.362,2.457,0.899,4.918,1.615,7.294s1.611,4.669,2.689,6.789","c1.079,2.121,2.34,4.069,3.789,5.76","c1.448,1.69,3.084,3.121,4.911,4.205","c1.827,1.085,3.845,1.822,6.059,2.126","c1.345,0.174,2.652,0.131,3.911-0.098","c1.259-0.228,2.469-0.64,3.619-1.204","c1.15-0.563,2.241-1.28,3.261-2.115","c1.021-0.836,1.97-1.79,2.838-2.832s1.654-2.17,2.349-3.353","c0.694-1.184,1.297-2.42,1.796-3.679s0.896-2.539,1.177-3.809","c0.282-1.271,0.451-2.528,0.494-3.744","c0-1.085-0.092-2.035-0.259-2.851","c-0.167-0.816-0.409-1.498-0.707-2.049s-0.653-0.97-1.048-1.259","c-0.395-0.29-0.829-0.45-1.285-0.482","c-0.455-0.032-0.933,0.062-1.414,0.282","c-0.481,0.221-0.967,0.566-1.439,1.036","c-0.472,0.47-0.93,1.062-1.357,1.775s-0.824,1.55-1.171,2.505","c-0.435,1.389-0.629,2.62-0.624,3.706","c0.006,1.085,0.213,2.025,0.581,2.831","c0.369,0.806,0.901,1.477,1.558,2.025s1.438,0.975,2.306,1.29s1.822,0.519,2.826,0.622s2.057,0.107,3.12,0.023","c1.062-0.084,2.137-0.256,3.185-0.505","c1.047-0.249,2.067-0.574,3.021-0.965","c0.651-0.261,1.459-0.629,2.362-1.091s1.902-1.018,2.933-1.649s2.094-1.341,3.128-2.112","c1.033-0.771,2.037-1.604,2.948-2.482s1.731-1.804,2.396-2.76","c0.665-0.955,1.175-1.941,1.468-2.942s0.369-2.017,0.165-3.032","c-0.203-1.016-0.686-2.029-1.511-3.028","c-0.608-0.781-1.199-1.318-1.771-1.652","c-0.572-0.333-1.124-0.463-1.653-0.431","c-0.528,0.033-1.034,0.228-1.515,0.545","c-0.479,0.317-0.932,0.757-1.355,1.278","c-0.423,0.521-0.816,1.123-1.176,1.766","c-0.36,0.643-0.688,1.326-0.978,2.01s-0.544,1.367-0.757,2.01","c-0.214,0.644-0.388,1.245-0.518,1.767","c-0.304,1.215-0.51,2.426-0.617,3.617","c-0.108,1.191-0.117,2.365-0.028,3.507s0.278,2.253,0.566,3.319s0.676,2.089,1.164,3.055s1.077,1.875,1.767,2.713","c0.689,0.84,1.48,1.608,2.373,2.295s1.887,1.29,2.982,1.798","c1.097,0.508,2.296,0.92,3.598,1.224","c1.866,0.391,3.771,0.564,5.694,0.55s3.868-0.216,5.812-0.577s3.892-0.881,5.821-1.529s3.842-1.428,5.719-2.306","c1.877-0.879,3.719-1.858,5.507-2.909","c1.788-1.05,3.523-2.172,5.187-3.336s3.254-2.369,4.755-3.588s2.911-2.449,4.214-3.665","c0.824-0.737,1.72-1.649,2.639-2.697","c0.918-1.048,1.859-2.231,2.775-3.515","c0.917-1.283,1.81-2.665,2.63-4.109","c0.821-1.444,1.569-2.949,2.198-4.479","c0.629-1.53,1.14-3.084,1.482-4.625","c0.344-1.542,0.52-3.07,0.481-4.548s-0.29-2.907-0.804-4.248","c-0.514-1.34-1.29-2.594-2.375-3.722","c-0.868-0.825-1.752-1.416-2.642-1.808","c-0.889-0.392-1.782-0.584-2.67-0.612s-1.768,0.111-2.629,0.381","c-0.862,0.27-1.706,0.671-2.52,1.17s-1.598,1.096-2.341,1.756","c-0.742,0.661-1.443,1.385-2.092,2.139s-1.244,1.538-1.775,2.318","c-0.53,0.78-0.997,1.556-1.388,2.293","c-0.781,1.562-1.541,3.385-2.241,5.394","c-0.701,2.009-1.342,4.203-1.888,6.509","c-0.545,2.306-0.994,4.723-1.31,7.176","c-0.315,2.454-0.497,4.944-0.508,7.396s0.149,4.866,0.518,7.168","c0.369,2.302,0.945,4.491,1.768,6.493s1.889,3.816,3.239,5.37","c1.351,1.553,2.983,2.845,4.937,3.799","c1.085,0.521,2.577,0.96,4.36,1.303","c1.784,0.343,3.858,0.588,6.11,0.721s4.68,0.153,7.168,0.045","c2.488-0.107,5.039-0.344,7.534-0.724s4.938-0.903,7.209-1.586","c2.272-0.683,4.375-1.525,6.192-2.542s3.35-2.209,4.482-3.592s1.865-2.956,2.082-4.736","c0.043-0.478,0.043-0.927,0.008-1.341","c-0.036-0.414-0.108-0.791-0.209-1.122s-0.229-0.616-0.379-0.845","c-0.15-0.229-0.321-0.403-0.506-0.512s-0.383-0.152-0.587-0.121s-0.413,0.137-0.622,0.327s-0.416,0.464-0.615,0.832","c-0.199,0.367-0.389,0.829-0.562,1.393","c0.781,0.391,1.579,0.651,2.387,0.812","c0.808,0.161,1.625,0.223,2.447,0.214s1.648-0.086,2.473-0.202","c0.824-0.115,1.646-0.27,2.459-0.433","c0.814-0.163,1.619-0.333,2.411-0.482","c0.791-0.148,1.568-0.274,2.325-0.348s1.493-0.094,2.203-0.03","c0.711,0.062,1.395,0.209,2.045,0.47","c0.564,0.218,1.053,0.494,1.488,0.803","c0.437,0.31,0.82,0.651,1.176,0.998s0.683,0.7,1.005,1.031","c0.321,0.331,0.64,0.64,0.976,0.9s0.691,0.472,1.09,0.607s0.839,0.194,1.346,0.151","c0.508-0.043,1.081-0.189,1.745-0.466","c0.664-0.277,1.418-0.685,2.286-1.248"];


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

      var pos = function (length) {
        return 2 + Math.round((data.length - 2) * length / maxLength);
      } 

      d3.select(inputClass).on("keyup", function(){
        var length = $(this).val().length;
        if(length == prev)
          return 

        var cur = pos(length)
        var p = pos(prev);
        var p = cur < p ? cur - 1 : p;
        console.log(length, cur, p)

        var pathTween = function () { 
          var interpolate = d3.scale.quantile()
          .domain([0,1]) 
          .range(d3.range(p, cur));
          return function(t) {
            return line(data.slice(0, interpolate(t)));
          };
        }

        path
          .attr('d', data.slice(0, p))
          .transition()
          .duration(300)
          .attrTween('d', pathTween);

        prev = length
      });
    }
  }
})(app);

