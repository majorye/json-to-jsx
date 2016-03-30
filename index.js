
/**
 * Expose `jsx()`.
 */

module.exports = jsx;

/**
 * Convert JSON Object to jsx.
 *
 * @param {Object} obj {}
 * @return {String}
 * @api public
 */

function jsx(obj, indents) {
  var indents = indents || 1;

  function indent() {
    return Array(indents).join('  ');
  }

  function getProps(json){
    if(!json) return "";
    var keys = Object.keys(json);
    var _props=keys.map(function(key){
      return " '"+key+"'="+JSON.stringify(json[key])+"";
    }).join('');
    return _props;
  }

  if (Array.isArray(obj)) {
    ++indents;
    var buf = '\n' + obj.map(function(val){
      return indent() + html(val, indents);
    }).join('\n');
    --indents;
    buf +=  indent();
    return buf;

  }else if(obj.componentName) {

    var buf = '<'+obj.componentName+ getProps(obj.props)+">";
    var keys = Object.keys(obj);
    var len = keys.length;
    ++indents;
    if(obj.children) {
      buf += html(obj.children,indents);
    }
    --indents;
    if (len) buf += '\n' + indent();
    buf += '</'+obj.componentName+'>';

    return buf;
  }
}


