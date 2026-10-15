 // concatenation
            let first_name = "Jane "
            let last_name = "Doe"
            let full_name = first_name + last_name
            let full_name2 = first_name.concat(last_name)
            console.log(full_name)
            console.log(full_name2)

            //template literals
            let str =  `My name is ${full_name}`
            console.log(str) //My name is Jane Doe

            //index
            console.log(first_name[0])
            console.log(first_name[2])

            //length
            console.log(first_name.length) //5 

            //slicing
            let x = "This is a test string"
            console.log(x.slice(0,7)) //This is


            //uppercase and lowercase
            console.log(x.toLowerCase()) //this is a test string
            console.log(x.toUpperCase()) //THIS IS A TEST STRING

            //includes
            console.log(x.includes('x')) //false
            console.log(x.includes("This")) //true

            //starts and ends with
            console.log(x.startsWith("T")) //true
            console.log(x.endsWith('eng')) //false

            //trim
            let y = "    jack   .     "
            console.log(y)
            console.log(y.length)
            console.log(y.trim())
            console.log(y.trim().length)
            console.log(y.trimEnd())
            console.log(y.trimStart())



            let num = 23
            num++
            num++
            num++
            num--
            console.log(num) //25


            let name = "  JOHn ."
            name =  name.replace('.'," ").trim().toLowerCase()
            console.log(name) //john