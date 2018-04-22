<?php

/* themes/newnextgen/templates/html.html.twig */
class __TwigTemplate_11bce14e3b04903064f3e9b66b49da808bdbedb3b21809941010c7c3999e2398 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array("attach_library" => 37);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array(),
                array('attach_library')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<!DOCTYPE html>
<html dir=\"ltr\">
<head>

    <script>
        var themeHasJQuery = !!window.jQuery;
    </script>
    <script type=\"text/javascript\" src=\"./newnextgen/assets/js/jquery.js?1.0.634\"></script>
    <script>
        window._\$ = jQuery.noConflict(themeHasJQuery);
    </script>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"./newnextgen/assets/css/bootstrap.css?1.0.634\" media=\"screen\" />
    <script type=\"text/javascript\" src=\"./newnextgen/assets/js/bootstrap.min.js?1.0.634\"></script>
    <!--[if lte IE 9]>
    <link rel=\"stylesheet\" href=\"./newnextgen/assets/css/layout.ie.css?1.0.634\">
    <script src=\"./newnextgen/assets/js/layout.ie.js?1.0.634\"></script>
    <![endif]-->
    <link class=\"\" href='http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic&subset=latin' rel='stylesheet' type='text/css'>
    <script type=\"text/javascript\" src=\".newnextgen/assets/js/layout.core.js\"></script>
    <script src=\"./newnextgen/assets/js/CloudZoom.js?1.0.634\"></script>

    <title>Home Page</title>
    <link rel=\"stylesheet\" href=\"./newnextgen/assets/css/style.css?1.0.634\">
    <script src=\"./newnextgen/assets/js/script.js?1.0.634\"></script>
    <meta charset=\"utf-8\">



    <meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">


    <style>a {
            transition: color 250ms linear;
        }
    </style>
    ";
        // line 37
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("nextnextgen/global"), "html", null, true));
        echo "
</head>
<body class=\"bd-body-1  bootstrap bd-pagebackground\">
";
        // line 40
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_top"] ?? null), "html", null, true));
        echo "
";
        // line 41
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page"] ?? null), "html", null, true));
        echo "
";
        // line 42
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_bottom"] ?? null), "html", null, true));
        echo "
</body>
</html>";
    }

    public function getTemplateName()
    {
        return "themes/newnextgen/templates/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 42,  91 => 41,  87 => 40,  81 => 37,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/newnextgen/templates/html.html.twig", "/Applications/AMPPS/www/www.lptest.com/drupal-project/web/themes/newnextgen/templates/html.html.twig");
    }
}
