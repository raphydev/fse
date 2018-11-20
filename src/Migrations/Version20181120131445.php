<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181120131445 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE program DROP FOREIGN KEY FK_92ED778461ACFC5B');
        $this->addSql('CREATE TABLE section (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, interval_horaire VARCHAR(10) NOT NULL, lieu VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('DROP TABLE schecule');
        $this->addSql('ALTER TABLE item ADD section_id INT DEFAULT NULL, ADD title VARCHAR(255) NOT NULL, ADD tag_name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251ED823E37A FOREIGN KEY (section_id) REFERENCES section (id)');
        $this->addSql('CREATE INDEX IDX_1F1B251ED823E37A ON item (section_id)');
        $this->addSql('DROP INDEX IDX_92ED778461ACFC5B ON program');
        $this->addSql('ALTER TABLE program ADD content LONGTEXT NOT NULL, DROP schecule_id, DROP title');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251ED823E37A');
        $this->addSql('CREATE TABLE schecule (id INT AUTO_INCREMENT NOT NULL, date_name VARCHAR(150) NOT NULL COLLATE utf8_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('DROP TABLE section');
        $this->addSql('DROP INDEX IDX_1F1B251ED823E37A ON item');
        $this->addSql('ALTER TABLE item DROP section_id, DROP title, DROP tag_name');
        $this->addSql('ALTER TABLE program ADD schecule_id INT DEFAULT NULL, ADD title VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, DROP content');
        $this->addSql('ALTER TABLE program ADD CONSTRAINT FK_92ED778461ACFC5B FOREIGN KEY (schecule_id) REFERENCES schecule (id)');
        $this->addSql('CREATE INDEX IDX_92ED778461ACFC5B ON program (schecule_id)');
    }
}
