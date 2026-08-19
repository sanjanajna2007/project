<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:black ;">
    Characters	Meaning
(x)	
Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar".

A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements ([1], …, [n]) or from the predefined RegExp object's properties ($1, …, $9).

Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).

String.prototype.match() won't return groups if the /.../g flag is set. However, you can still use String.prototype.matchAll() to get all matches.

(?<Name>x)	
Named capturing group: Matches "x" and stores it on the groups property of the returned matches under the name specified by <Name>. The angle brackets (< and >) are required for group name.

For example, to extract the United States area code from a phone number, we could use /\((?<area>\d\d\d)\)/. The resulting number would appear under matches.groups.area.

(?:x)	
Non-capturing group: Matches "x" but does not remember the match. The matched substring cannot be recalled from the resulting array's elements ([1], …, [n]) or from the predefined RegExp object's properties ($1, …, $9).
    
</body>
<script>

    const xhr = new XMLHttpRequest();
    const requestUrl = ('GET','https://api.github,com/users/hiteshchoudhary')
    //xhr,open('GET', requestUrl)
    xhr.onereadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readystate ===4) {
            const data = JSON.parsel(this.responseText);
            console.log(typeof data);
            console.log(data.followers);
        }

    }
    console.log(xhr.readyState);
    xhr.send()

</script>
</html>
